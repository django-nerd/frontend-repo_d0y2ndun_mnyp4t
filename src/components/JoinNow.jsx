import React from 'react';

const JoinNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const interest = form.get('interest');
    const msg = `Thanks ${name}! We'll reach out to ${email} about ${interest}.`;
    alert(msg);
    e.currentTarget.reset();
  };

  return (
    <section id="join-now" className="relative w-full bg-[#070a13] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_0%_50%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(147,51,234,0.15)]">
          <h3 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Join Nongkrong Academy
          </h3>
          <p className="mt-2 text-center text-white/80">
            Apply now — limited seats per cohort. We welcome beginners and self‑starters.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/80">Full Name</label>
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/80">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-white/80">Program Interest</label>
              <select
                name="interest"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              >
                <option className="bg-[#070a13]">Business Blueprint Program</option>
                <option className="bg-[#070a13]">Public Speaker Program</option>
                <option className="bg-[#070a13]">Web Development Program</option>
                <option className="bg-[#070a13]">Ads with Google Ads</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.01] focus:outline-none"
              >
                <span className="absolute inset-0 -z-[1] animate-pulse bg-gradient-to-r from-purple-500/20 via-blue-400/20 to-orange-400/20 blur-2xl" />
                Register Now
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-white/60">
            By registering, you agree to our terms and consent to be contacted about upcoming cohorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;

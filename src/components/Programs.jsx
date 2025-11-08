import React from 'react';
import { Briefcase, Mic, Laptop, BarChart2 } from 'lucide-react';

const programs = [
  {
    title: 'Business Blueprint Program',
    icon: Briefcase,
    emoji: '💼',
    desc: 'Design, test, and launch your business fundamentals with mentorship.',
  },
  {
    title: 'Public Speaker Program',
    icon: Mic,
    emoji: '🎤',
    desc: 'Master stage presence, craft stories, and deliver talks that move people.',
  },
  {
    title: 'Web Development Program',
    icon: Laptop,
    emoji: '💻',
    desc: 'Build modern websites and apps with real projects and code reviews.',
  },
  {
    title: 'Ads with Google Ads',
    icon: BarChart2,
    emoji: '📈',
    desc: 'Learn performance marketing and scale campaigns with confidence.',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="relative w-full bg-[#070a13] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_100%,rgba(14,165,233,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">Choose Your Level</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Four core programs to level up your skills — each crafted for outcomes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, icon: Icon, emoji, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600/40 via-sky-500/40 to-orange-500/40 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xl" aria-hidden>
                  {emoji}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>

              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/0 via-purple-500/20 to-orange-400/0 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Mentorship from Experts', desc: 'Personalized guidance from practitioners who ship.' },
            { title: 'Hands-on Learning', desc: 'Ship projects, demos, and campaigns — not just theory.' },
            { title: 'Community Support', desc: 'Peer feedback, accountability, and collab opportunities.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="text-base font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

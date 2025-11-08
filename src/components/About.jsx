import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1020] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_80%,rgba(249,115,22,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Empowering the Next Wave of Builders
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/80 md:text-lg">
          Nongkrong Academy helps young people turn curiosity into capability. Through a blend of offline gatherings and online sprints, we teach entrepreneurship, communication, and digital skills with a focus on action, feedback, and community.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Entrepreneurship',
              desc: 'Validate ideas, build lean MVPs, and learn growth fundamentals.'
            },
            {
              title: 'Communication',
              desc: 'Speak with clarity, pitch with confidence, and tell compelling stories.'
            },
            {
              title: 'Digital Skills',
              desc: 'From web development to ads — learn the tools that power modern work.'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef, useState } from 'react';

const data = [
  {
    name: 'Raka — Web Dev Cohort',
    quote:
      'I built my first freelance website within 6 weeks. The mentorship and weekly reviews kept me moving fast.',
  },
  {
    name: 'Naya — Speaker Cohort',
    quote:
      'I went from stage fright to delivering my story to 300+ people. The frameworks are gold.',
  },
  {
    name: 'Dimas — Growth Sprint',
    quote:
      'The Google Ads crash course gave me the confidence to run real campaigns and land a client.',
  },
  {
    name: 'Tara — Biz Blueprint',
    quote:
      'Loved the vibe and community. I validated my idea and launched a pre-order within a month.',
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-[#0b1020] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">Success Stories</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Real outcomes from learners who decided to build, not just watch.
        </p>

        <div ref={containerRef} className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)`, width: `${data.length * 100}%` }}
          >
            {data.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-2 sm:px-4 md:px-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <p className="text-lg leading-relaxed text-white/90">“{t.quote}”</p>
                  <div className="mt-4 text-sm font-medium text-white/70">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {data.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-6 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/30'}`}
              />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

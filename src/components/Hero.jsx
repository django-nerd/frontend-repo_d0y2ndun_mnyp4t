import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const handlePrimary = () => {
    const el = document.getElementById('join-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const handleSecondary = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(1250px_600px_at_50%_-20%,#1e1b4b_0%,#0b1020_60%,#070a13_100%)] text-white">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1020]/30 to-[#070a13]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          Next‑gen learning for youth, creators, and entrepreneurs
        </span>
        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-orange-300 bg-clip-text text-transparent">
            From Hangout to Skillset
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
          Nongkrong Academy blends creativity, technology, and community to help you learn real‑world skills through immersive offline & online programs.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={handlePrimary}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02] focus:outline-none"
          >
            <span className="absolute inset-0 -z-[1] animate-pulse bg-gradient-to-r from-purple-500/20 via-blue-400/20 to-orange-400/20 blur-2xl" />
            Start Learning Now
          </button>
          <button
            onClick={handleSecondary}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

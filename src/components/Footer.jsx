import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#060912] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-500 via-fuchsia-500 to-purple-600" />
          <div className="text-lg font-semibold">Nongkrong Academy</div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#join-now" className="hover:text-white">Join</a>
        </nav>
        <div className="flex items-center gap-4">
          <a aria-label="Instagram" href="#" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href="#" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a aria-label="YouTube" href="#" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} nongkrongacademy.id — All rights reserved.</div>
    </footer>
  );
};

export default Footer;

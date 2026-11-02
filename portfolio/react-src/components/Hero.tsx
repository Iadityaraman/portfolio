import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative pt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center gap-2 bg-[#00ff66]/10 border border-[#00ff66]/30 px-3 py-1 rounded text-xs font-mono text-[#00ff66]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse"></span>
          SYSTEM ONLINE // SEM 1
        </span>
        <span className="text-zinc-500 font-mono text-xs">📍 NEW DELHI, INDIA</span>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white"
      >
        ADITYA<br />
        <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          RAMAN.
        </span>
      </motion.h1>

      <div className="mt-8 space-y-2">
        <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">
          Aspiring Software Developer.
        </h2>
        <p className="font-mono text-sm text-[#00ff66]">
          // Currently building. Constantly learning.
        </p>
      </div>

      <blockquote className="my-8 border-l-2 border-[#00ff66] pl-4 italic text-zinc-300 font-display text-lg">
        "1% Better Every Day."
      </blockquote>

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <a
          href="#progress"
          className="inline-flex items-center gap-2 bg-white text-black font-mono text-xs font-bold px-6 py-3 rounded hover:bg-[#00ff66] transition-colors"
        >
          [ EXPLORE MY JOURNEY ]
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://github.com/iadityaraman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white font-mono text-xs font-bold px-6 py-3 rounded hover:border-[#00ff66] hover:text-[#00ff66] transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          [ GITHUB PROFILE ]
        </a>
        <a
          href="https://www.linkedin.com/in/iadityaraman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white font-mono text-xs font-bold px-6 py-3 rounded hover:border-[#00ff66] hover:text-[#00ff66] transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5" />
          [ LINKEDIN ]
        </a>
      </div>
    </section>
  );
};


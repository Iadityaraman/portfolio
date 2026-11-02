import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { SkillMap } from './components/SkillMap';
import { ContributionCalendar } from './components/ContributionCalendar';
import { ProjectUniverse } from './components/ProjectUniverse';
import { About } from './components/About';
import { Socials } from './components/Socials';
import { BootSequence } from './components/BootSequence';

export const App: React.FC = () => {
  const [bootCompleted, setBootCompleted] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00ff66] selection:text-black font-sans relative overflow-x-hidden">
      {!bootCompleted && (
        <BootSequence onEnter={() => setBootCompleted(true)} />
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-[70px] bg-[#050505]/80 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#0d0f12] border border-[#00ff66]/40 flex items-center justify-center font-mono font-bold text-[#00ff66] text-xs">
            AR
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight">ADITYA RAMAN</div>
            <div className="font-mono text-[10px] text-zinc-500">NST @ RISHIHOOD</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">// 01 ABOUT</a>
          <a href="#terminal" className="hover:text-white transition-colors">// 02 TERMINAL</a>
          <a href="#learning" className="hover:text-white transition-colors">// 03 SKILLS</a>
          <a href="#progress" className="hover:text-white transition-colors">// 04 PROGRESS</a>
          <a href="#projects" className="hover:text-white transition-colors">// 05 PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors">// 06 CONTACT</a>
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
          <span>YEAR 1 CSE</span>
        </div>
      </header>

      {/* Main Sections */}
      <main className="max-w-[1180px] mx-auto px-6 space-y-24 py-12">
        <Hero />
        <About />
        <Terminal />
        <SkillMap />
        <ContributionCalendar />
        <ProjectUniverse />
        <Socials />

        {/* Monumental Tagline */}
        <section className="text-center py-24 border-t border-white/10">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-tight tracking-tight">
            "NOT BUILT IN A DAY.<br />
            <span className="text-[#00ff66] drop-shadow-[0_0_25px_rgba(0,255,102,0.4)]">BUILT EVERY DAY."</span>
          </h2>
          <p className="font-mono text-sm text-zinc-400 mt-6 tracking-wider">
            Compounding discipline, curiosity, and code. Engineered by Aditya Raman.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 font-mono text-xs text-zinc-500 text-center">
        ADITYA.OS v1.0.4 • NEWTON SCHOOL OF TECHNOLOGY @ RISHIHOOD UNIVERSITY
      </footer>
    </div>
  );
};

export default App;


import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Socials: React.FC = () => {
  return (
    <section id="contact" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 06 TRANSMISSION</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">Social Connections</h2>
      <p className="text-zinc-400 text-sm max-w-xl">
        Connect to discuss computer science, logic building, or mountain trekking.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="https://www.linkedin.com/in/iadityaraman"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0e0f12] border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#00ff66]/40 hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#15171d] flex items-center justify-center text-[#00ff66]">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">LinkedIn</div>
              <div className="font-mono text-[10px] text-zinc-500">iadityaraman</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500" />
        </a>

        <a
          href="https://github.com/iadityaraman"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0e0f12] border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#00ff66]/40 hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#15171d] flex items-center justify-center text-[#00ff66]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">GitHub</div>
              <div className="font-mono text-[10px] text-zinc-500">iadityaraman</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500" />
        </a>

        <a
          href="mailto:iadityaraman@outlook.com"
          className="bg-[#0e0f12] border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#00ff66]/40 hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#15171d] flex items-center justify-center text-[#00ff66]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">Email</div>
              <div className="font-mono text-[10px] text-zinc-500">iadityaraman@outlook.com</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500" />
        </a>
      </div>
    </section>
  );
};


import React from 'react';
import { ExternalLink } from 'lucide-react';

export const ProjectUniverse: React.FC = () => {
  const projects = [
    {
      id: "EXP_001",
      title: "CLI Dev Note Keeper",
      category: "PYTHON // TERMINAL",
      desc: "A minimalist command-line note-taking tool. Quickly create, search, and tag markdown notes directly from the shell.",
      tech: ["Python", "Argparse", "JSON"]
    },
    {
      id: "EXP_002",
      title: "Number Systems Engine",
      category: "CS FOUNDATIONS // ALGORITHMS",
      desc: "Educational tool that visualizes base conversions, 2's complement arithmetic, and IEEE-754 formats.",
      tech: ["Python", "Bitwise Math", "Algorithms"]
    },
    {
      id: "EXP_003",
      title: "Git Workflow Helper",
      category: "BASH // SCRIPTING",
      desc: "A terminal assistant for learning branch isolation, safe resets, and clean commit hygiene.",
      tech: ["Bash", "Git Hooks", "POSIX"]
    }
  ];

  return (
    <section id="projects" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 05 PROJECT_UNIVERSE</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">Project Universe</h2>

      {/* Prominent Empty State */}
      <div className="border border-dashed border-zinc-700 bg-[#0c0d10]/60 rounded-xl p-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00ff66] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-ping"></span>
          REPOSITORY_STATUS: COMPILING EXPERIMENTS
        </div>
        <p className="font-display text-xl text-white">
          "Every great developer starts somewhere. Projects are loading..."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div
            key={p.id}
            className="bg-[#0e0f12]/80 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#00ff66]/40 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="font-mono text-[11px] text-[#00ff66] mb-2">{p.category}</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t, i) => (
                  <span key={i} className="font-mono text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <a
                href="https://github.com/iadityaraman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#00ff66] transition-colors"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-zinc-500">{p.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


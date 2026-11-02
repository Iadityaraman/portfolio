import React from 'react';

export const SkillMap: React.FC = () => {
  const skills = [
    {
      id: "NODE_01",
      name: "PYTHON",
      status: "CURRENTLY LEARNING",
      desc: "Learning programming fundamentals, logic building and problem-solving.",
      focus: "Data structures, OOP, & algorithms"
    },
    {
      id: "NODE_02",
      name: "TERMINAL",
      status: "EXPLORING",
      desc: "Exploring command-line interfaces and system operations.",
      focus: "POSIX tools, pipes, & shell navigation"
    },
    {
      id: "NODE_03",
      name: "GIT",
      status: "CURRENTLY LEARNING",
      desc: "Understanding version control, commits, and branches.",
      focus: "Branching, rebasing, & merge hygiene"
    },
    {
      id: "NODE_04",
      name: "GITHUB",
      status: "EXPLORING",
      desc: "Building repositories and documenting my progress.",
      focus: "Remote repos, workflows, & open source"
    }
  ];

  return (
    <section id="learning" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 03 NEURAL_MAP</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">Currently Learning</h2>
      <p className="text-zinc-400 text-sm max-w-2xl">
        Every skill reflects an active, honest learning commitment. No exaggerated expertise claims.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map(s => (
          <div
            key={s.id}
            className="bg-[#0e0f12]/80 border border-white/10 rounded-xl p-6 hover:border-[#00ff66]/40 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
              <span className="text-zinc-500">{s.id}</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                s.status === 'CURRENTLY LEARNING' ? 'bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
              }`}>
                {s.status}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">{s.name}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.desc}</p>
            <div className="border-t border-white/5 pt-3 font-mono text-xs text-zinc-500">
              Focus: <span className="text-zinc-300">{s.focus}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


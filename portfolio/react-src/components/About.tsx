import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 01 IDENTITY_MATRIX</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">About Aditya Raman</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
          <p className="text-base text-white font-medium">
            I am a first-year B.Tech Computer Science student at <strong>Newton School of Technology, Rishihood University</strong>.
          </p>
          <p>
            I am at the beginning of my software development journey. Rather than claiming false mastery, I dedicate my days to the essentials: understanding the terminal, building algorithmic logic in Python, and mastering version control.
          </p>
          <p>
            I believe in consistency, curiosity, experimentation and learning by building.
          </p>
        </div>

        <div className="bg-[#0e0f12] border border-white/10 rounded-xl p-6 font-mono text-xs space-y-4">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-zinc-500">DEGREE</span>
            <span className="text-white">B.Tech Computer Science</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-zinc-500">INSTITUTION</span>
            <span className="text-white">Newton School of Technology</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-zinc-500">UNIVERSITY</span>
            <span className="text-white">Rishihood University</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-zinc-500">PHILOSOPHY</span>
            <span className="text-[#00ff66]">1% Better Every Day</span>
          </div>
        </div>
      </div>
    </section>
  );
};


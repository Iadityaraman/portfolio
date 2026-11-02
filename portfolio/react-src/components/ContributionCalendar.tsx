import React from 'react';

export const ContributionCalendar: React.FC = () => {
  // 52 weeks x 7 days
  const totalDays = 52 * 7;
  const activeIndices = [
    12, 13, 14, 18, 19, 20, 21, 26, 27, 28, 30, 31,
    45, 46, 47, 48, 52, 53, 54, 55, 60, 61, 62, 63,
    80, 81, 82, 85, 86, 87, 88, 92, 93, 94, 99, 100,
    115, 116, 117, 120, 121, 122, 125, 126, 130, 131,
    150, 151, 152, 155, 156, 157, 160, 161, 162, 165,
    180, 181, 182, 185, 186, 187, 190, 191, 195, 196
  ];

  return (
    <section id="progress" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 04 THE 1% RULE</div>
      <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight">
        NOT PERFECT.<br />
        <span className="text-[#00ff66]">JUST PROGRESSING.</span>
      </h2>
      <p className="text-zinc-400 text-sm max-w-2xl">
        A reflection of daily coding sessions, problem solving, and concepts learned throughout the semester.
      </p>

      <div className="bg-[#0e0f12]/90 border border-white/10 rounded-xl p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div>
            <h3 className="font-display font-bold text-lg text-white">Daily Contribution Matrix</h3>
            <p className="font-mono text-xs text-zinc-500">Compounding 1% Better Every Day</p>
          </div>
          <div className="flex gap-6 font-mono text-xs">
            <div>
              <div className="text-lg font-bold text-[#00ff66]">48</div>
              <div className="text-zinc-500">Active Days</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#00ff66]">12</div>
              <div className="text-zinc-500">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
            {Array.from({ length: totalDays }).map((_, i) => {
              const isActive = activeIndices.includes(i);
              return (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-[2px] transition-transform hover:scale-125 ${
                    isActive ? 'bg-[#00ff66] shadow-[0_0_6px_rgba(0,255,102,0.4)]' : 'bg-zinc-900 border border-white/5'
                  }`}
                  title={`Day #${i + 1}: ${isActive ? 'Active Coding Session' : 'Rest / Study'}`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-zinc-500">
          <span>52-week activity log</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-900"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00ff66]"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
  onEnter: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  const logs = [
    "INITIALIZING ADITYA.OS v1.0.4",
    "Loading developer environment...",
    "Initializing curiosity... [OK]",
    "Loading consistency... [OK]",
    "Compiling ambitions... [OK]",
    "Verifying: Newton School of Technology @ Rishihood... [VERIFIED]",
    "100% COMPLETE. SYSTEM READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 15;
      });
    }, 280);

    const logTimer = setInterval(() => {
      setStep(prev => Math.min(prev + 1, logs.length - 1));
    }, 320);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#030304] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#0a0b0e]/90 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-[#00ff66]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping"></span>
            <span>KERNEL BOOT</span>
          </div>
          <span>v1.0.4</span>
        </div>

        <div className="font-mono text-sm space-y-2 min-h-[160px]">
          {logs.slice(0, step + 1).map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-zinc-300"
            >
              <span className="text-[#00ff66] font-bold">&gt;</span>
              <span>{log}</span>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 to-[#00ff66] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {progress >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={onEnter}
              className="bg-black hover:bg-[#00ff66] hover:text-black text-white border border-[#00ff66] px-8 py-3 rounded font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_35px_rgba(0,255,102,0.6)]"
            >
              [ ENTER MY WORLD ]
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};


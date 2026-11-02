import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'whoami', output: 'Aditya Raman — First-Year B.Tech CSE @ Newton School of Technology, Rishihood University.' }
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available: help, about, skills, journey, projects, philosophy, clear';
        break;
      case 'about':
        output = 'Aditya Raman | B.Tech Computer Science student building daily habits in Python, Terminal, and Git.';
        break;
      case 'skills':
        output = '[Python: CURRENTLY LEARNING] • [Terminal: EXPLORING] • [Git: CURRENTLY LEARNING] • [GitHub: EXPLORING]';
        break;
      case 'journey':
        output = 'Day 28: Version control branching & merge resolution.\nDay 24: Object-oriented Python & CLI tool building.\nDay 01: Setup & committed to 1% daily improvement.';
        break;
      case 'projects':
        output = '"Every great developer starts somewhere. Projects are loading..."\n- CLI Dev Note Keeper\n- Number Systems Engine\n- Git Workflow Helper';
        break;
      case 'philosophy':
        output = '"Small progress every day leads to remarkable results."';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `Command not recognized: ${cmd}. Type 'help' for options.`;
    }

    setHistory(prev => [...prev, { cmd, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="space-y-6">
      <div className="font-mono text-xs text-[#00ff66] tracking-widest">// 02 CLI_EMULATOR</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">Interactive Learning Terminal</h2>

      <div className="bg-[#0a0b0e] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[#0f1115] border-b border-white/10 px-4 py-3 flex items-center justify-between font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="ml-2 flex items-center gap-1 text-zinc-300">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00ff66]" />
              aditya@portfolio:~$
            </span>
          </div>
          <span>TAB to autocomplete</span>
        </div>

        <div className="p-6 font-mono text-xs space-y-4 max-h-[360px] overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#00ff66]">
                <span>aditya@portfolio:~$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="text-zinc-400 pl-4 whitespace-pre-line border-l border-white/10">
                {item.output}
              </div>
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-[#00ff66]">aditya@portfolio:~$</span>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="type 'help', 'skills', 'about'..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs caret-[#00ff66]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};


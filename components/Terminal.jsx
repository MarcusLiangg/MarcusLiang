"use client";

import { useState, useRef, useEffect } from 'react';

// --- NEW BANNER COMPONENT ---
const WelcomeBanner = () => (
  <div className="w-full relative border border-dashed border-blue-500/50 rounded-md p-5 mb-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-mono mt-4">
    {/* Absolute Title cutting through the border */}
    <div className="absolute -top-3 left-4 bg-zinc-950 px-2 text-blue-400 font-semibold">
      Portfolio OS v2.0.0
    </div>

    {/* Left Column: Avatar & Welcome */}
    <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-dashed border-blue-500/50 pb-6 md:pb-0 md:pr-6">
      <div className="mb-6 font-bold text-zinc-100 text-base">Welcome to my GitHub.io!</div>
      <pre className="text-blue-500 font-bold mb-6 text-center leading-none text-lg">
{`███▄ ▄███ ██
█████████ ██
██ ▀█▀ ██ ██
██     ██ ██
   ██     ██ █████`}
      </pre>
      <div className="text-zinc-500 text-xs text-center space-y-1">
        <div>Next.js 14.0 • Max 20x</div>
        <div>~/users/marcus/portfolio</div>
      </div>
    </div>

    {/* Right Column: Activity & News */}
    <div className="flex flex-col gap-4">
      {/* Recent Activity */}
      <div className="border-b border-dashed border-blue-500/50 pb-4">
        <div className="text-blue-400 mb-2 font-semibold">Recent activity</div>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-zinc-300">
          <span className="text-zinc-500 whitespace-nowrap">11 May</span>
          <span>Started a new Intern at PhillipCapital</span>
        </div>
        <div className="text-zinc-600 mt-2 text-xs">...→ <b>"experience"</b> for more</div>
      </div>

      {/* AI Guide */}
      <div>
        <div className="text-blue-400 mb-2 font-semibold">System Controls</div>
        <div className="text-zinc-300 space-y-1">
          <div><span className="text-zinc-100 font-semibold">"resume"</span> to trigger PDF download</div>
          <div><span className="text-zinc-100 font-semibold">"clear"</span> to reset terminal history</div>
        </div>
        <div className="text-zinc-500 mt-3 text-xs italic">
          ↳ Or just ask the AI: "What did Marcus do at Shopee?"
        </div>
      </div>
    </div>
  </div>    
);

export default function Terminal() {
  // Initialize with the banner and a helpful prompt
  const [history, setHistory] = useState([
    { type: 'banner' },
    { type: 'output', text: 'Portfolio OS initialized. Ask the AI any question about my background.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  const handleCommand = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      
      const cmd = input.trim();
      if (!cmd) return; // Do nothing if input is empty
      
      // 1. Handle "clear" (Keep the banner!)
      if (cmd.toLowerCase() === 'clear') {
        setHistory([{ type: 'banner' }]);
        setInput('');
        return;
      } 
      
      // 2. Instantly display the user's command
      const newHistory = [...history, { type: 'input', text: `visitor@portfolio:~$ ${cmd}` }];
      setInput('');
      
      // 3. Handle local static commands like "resume"
      if (cmd.toLowerCase() === 'resume') {
        const link = document.createElement('a');
        link.href = '/Marcus_Liang_Resume.pdf'; 
        link.download = 'Marcus_Liang_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setHistory([...newHistory, { type: 'output', text: 'Downloading resume...' }]);
        return;
      }

      // 4. Send everything else to the AI backend
      setHistory([...newHistory, { type: 'output', text: 'processing AI response...' }]);

      try {
        const response = await fetch('/api/terminal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ command: cmd }),
        });
        
        const data = await response.json();

        // Replace "processing..." with the actual AI response
        setHistory(prev => {
          const historyWithoutLoading = prev.slice(0, -1);
          return [...historyWithoutLoading, { type: 'output', text: data.text }];
        });

      } catch (error) {
        setHistory(prev => {
          const historyWithoutLoading = prev.slice(0, -1);
          return [...historyWithoutLoading, { type: 'error', text: 'Error: Cannot reach AI server.' }];
        });
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-zinc-950 border border-zinc-800 font-mono text-sm">
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-zinc-400 text-xs">visitor@portfolio ~ bash</span>
      </div>

      <div 
        className="p-6 h-[450px] overflow-y-auto text-zinc-300"
        onClick={() => document.getElementById('terminal-input').focus()}
      >
        <div className="flex flex-col gap-2">
          {history.map((line, i) => {
            // Render the special Banner component if the type matches
            if (line.type === 'banner') {
              return <WelcomeBanner key={i} />;
            }
            
            // Render standard terminal output
            return (
              <div key={i} className={`whitespace-pre-wrap ${line.type === 'error' ? 'text-red-400' : ''}`}>
                {line.text}
              </div>
            );
          })}
          
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-400">visitor@portfolio:~$</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none border-none text-zinc-100"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
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
      <div className="mb-6 font-bold text-zinc-100 text-base">Welcome back Marcus!</div>
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

      {/* What's New */}
      <div>
        <div className="text-blue-400 mb-2 font-semibold">What's new (try typing)</div>
        <div className="text-zinc-300 space-y-1">
          <div><span className="text-zinc-100 font-semibold">"resume"</span> to trigger PDF download</div>
          <div><span className="text-zinc-100 font-semibold">"skills"</span> to view technical stack</div>
          <div><span className="text-zinc-100 font-semibold">"clear"</span> to reset terminal history</div>
        </div>
        <div className="text-zinc-600 mt-2 text-xs">...→ <b>"help"</b> for more</div>
      </div>
    </div>
  </div>    
);

// --- MAIN TERMINAL DATA ---
const COMMANDS = {
  help: 'Available commands: about, skills, experience, education, resume, clear',
  about: 'Hi, I am Marcus Liang, a Data Scientist and AI Engineer currently pursuing a BSc in Business Analytics at NUS.',
  skills: `Machine Learning: Scikit-learn, XGBoost, PyTorch, Random Forest, Model Validation (PSI)
Data Engineering: Databricks, Apache Spark, Snowflake, AWS, ETL Pipelines
Languages: Python, SQL, Java, C#, R, JavaScript
Visualization & Tools: Power BI (DAX), Tableau, Matplotlib, UiPath`,
  experience: `• Business Analyst (Credit Risk) @ PhillipCapital (Current)
• Data Scientist Intern @ X Star Tech (Dec 2024 - Dec2025)
• E-Commerce Intern @ Shopee (Sep 2020 - Feb 2021)`,
  education: `Bachelor of Science in Business Analytics (with Honours) @ NUS!
  Check out more details below!`,
};

export default function Terminal() {
  // Initialize with our new Banner component type instead of standard text
  const [history, setHistory] = useState([
    { type: 'banner' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      
      const cmd = input.trim().toLowerCase();
      
      if (cmd === 'clear') {
        // We can either clear completely, or keep the banner. 
        // Clearing completely is more true to a real terminal!
        setHistory([]);
      } else {
        const newHistory = [...history, { type: 'input', text: `visitor@portfolio:~$ ${input}` }];
        
        if (cmd === '') {
          // Do nothing on empty enter
        } else if (cmd === 'resume') {
          const link = document.createElement('a');
          link.href = '/Marcus_Liang_Resume.pdf'; 
          link.download = 'Marcus_Liang_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          newHistory.push({ type: 'output', text: 'Downloading resume...' });
        } else if (COMMANDS[cmd]) {
          newHistory.push({ type: 'output', text: COMMANDS[cmd] });
        } else {
          newHistory.push({ type: 'error', text: `command not found: ${cmd}` });
        }
        setHistory(newHistory);
      }
      setInput('');
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
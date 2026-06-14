import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, Blocks, ShieldCheck, Scale, Award, Database, 
  FileDigit, Wallet, Briefcase, Target, Activity, Trophy 
} from 'lucide-react';

export default function CharityDaoProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-purple-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">WEB3 / SMART CONTRACTS</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Blocks size={14} /> Decentralized Charity
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Charity DAO
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Restoring trust in the charity sector through immutable blockchain records, quadratic voting, and milestone-based funding.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        
        {/* Project Image Cover (UPDATED DIMENSIONS) */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12 bg-zinc-100 border border-zinc-200/50 shadow-sm">
          <Image 
            src="/projects/daov2.png" 
            alt="Charity DAO Interface and Smart Contract Architecture"
            fill
            className="object-contain p-4"
            priority 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* --- THE STAR METHODOLOGY GRID --- */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 px-2 text-zinc-900">Project Breakdown (STAR)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Situation */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Situation</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Trust in the traditional charity sector is declining due to prevalent scams, administrative bloat, and a fundamental lack of transparency regarding how donor funds are actually utilized by NGOs.
              </p>
            </div>

            {/* Task */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Task</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                The objective was to architect a trustless, decentralized platform to restore donor confidence by ensuring every contribution is mathematically traceable, immutable, and strictly bound to verifiable impact metrics.
              </p>
            </div>

            {/* Action */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Activity size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Action</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Developed a full-stack Decentralized Autonomous Organization (DAO) using Solidity and React. Implemented a milestone-based disbursement contract where NGOs submit off-chain proof of work (anchored via IPFS) to unlock subsequent funding tranches.
              </p>
            </div>

            {/* Result */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-200 ring-1 ring-emerald-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Result</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Successfully deployed a functional Web3 charity platform that mathematically prevents fund misappropriation. The system democratizes governance by protecting against 'whale' dominance and establishes verifiable on-chain accountability.
              </p>
            </div>

          </div>
        </div>

        {/* Governance Mechanics (Custom Web3 Layout) */}
        <h2 className="text-2xl font-bold mb-6 px-2">Tokenomics & Governance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Quadratic Voting */}
          <div className="bg-purple-50 p-8 rounded-3xl shadow-sm border border-purple-100">
            <div className="w-14 h-14 bg-white text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Scale size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-900">Quadratic Voting</h3>
            <p className="text-zinc-600 leading-relaxed">
              To prevent "whales" (wealthy donors) from dominating decision-making, we implemented a quadratic voting model. The cost of votes scales exponentially, giving smaller donors more proportional influence over fund allocation.
            </p>
          </div>
          
          {/* Reputation System */}
          <div className="bg-purple-50 p-8 rounded-3xl shadow-sm border border-purple-100">
            <div className="w-14 h-14 bg-white text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-900">Reputation System</h3>
            <p className="text-zinc-600 leading-relaxed">
              Consistent participation is incentivized through a tiered, on-chain reputation system. Active, long-term donors earn algorithmic discounts on voting costs, rewarding governance participation over sheer capital.
            </p>
          </div>
        </div>

        {/* Smart Contract Architecture */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-800 mb-12 text-zinc-100">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <ShieldCheck className="text-purple-400" size={28} />
            <h2 className="text-2xl font-bold">Smart Contract Modules</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
              <Wallet className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-bold text-zinc-100 mb-2 text-lg">Treasury</h3>
              <p className="text-sm text-zinc-400">Securely manages ETH holdings, mints GOV tokens upon donation, and executes conditional tranches.</p>
            </div>
            
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
              <Blocks className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-bold text-zinc-100 mb-2 text-lg">VotingManager</h3>
              <p className="text-sm text-zinc-400">Handles the complex math for quadratic voting scaling and on-chain reputation tier calculations.</p>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
              <FileDigit className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-bold text-zinc-100 mb-2 text-lg">ProofOracle</h3>
              <p className="text-sm text-zinc-400">Verifies off-chain proofs (uploaded securely to Pinata IPFS) to trigger the next on-chain fund release.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-6 text-zinc-900">Technologies Stack</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Blockchain & Security</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Solidity (v0.8.24)</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">OpenZeppelin</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Hardhat & Ethers.js</span>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Frontend & Infrastructure</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">React & Vite</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">TailwindCSS</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">IPFS (Pinata)</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">MetaMask</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto">
            <a 
              href="https://github.com/MarcusLiangg/IS4302Proj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full lg:w-auto gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              {/* Official GitHub SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
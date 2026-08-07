import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Bot, Gavel, LayoutDashboard, Briefcase, Target, Activity, Trophy } from 'lucide-react';

export default function CommunityMartProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white pb-24">

      {/* Custom Minimal Header */}
      <header className="bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-400">HACK 4 GOOD 2025</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white border-b border-zinc-200 pt-12 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
            <Bot size={14} /> Full-Stack App
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Community Mart App
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
            Digitizing the distribution of essential goods with a digital voucher system, live auctions, and AI assistance.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12">

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
                Community organizations relied on manual, paper-based tracking for the distribution of essential goods. This outdated approach was highly inefficient, difficult for administrators to manage, and created friction for residents trying to access daily necessities.
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
                Participating in Hack 4 Good 2025, our team of five was tasked with modernizing this distribution process. The goal was to design a centralized digital mini-mart that bridged the gap between modern technology and accessible community service.
              </p>
            </div>

            {/* Action */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Activity size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Action</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Developed a full-stack application featuring a digital voucher point system that empowered residents to easily purchase and preorder necessities. We prioritized a seamless frontend UX—including an AI chatbot (Botpress) for instant support—while building robust backend tracking tools.
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
                Successfully replaced manual tracking with a streamlined digital ecosystem. The platform eliminated administrative bottlenecks and provided residents with a dignified, modernized, and highly accessible way to utilize their community vouchers.
              </p>
            </div>

          </div>
        </div>

        {/* Key Features Grid */}
        <h2 className="text-2xl font-bold mb-6 px-2">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Voucher Point System</h3>
            <p className="text-zinc-600 leading-relaxed">Residents can browse products and redeem them using digital points, entirely replacing physical coupons.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Integrated AI Chatbot</h3>
            <p className="text-zinc-600 leading-relaxed">Embedded Botpress NLP to provide instant assistance, answering common queries about collection times and account balances.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Gavel size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Live Auction System</h3>
            <p className="text-zinc-600 leading-relaxed">A gamified feature allowing residents to bid their digital points on exclusive deals or limited-stock items.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Admin Dashboard</h3>
            <p className="text-zinc-600 leading-relaxed">A streamlined interface for staff to approve product requests, verify point claims, and manage inventory in real-time.</p>
          </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-zinc-900">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-semibold border border-zinc-200/50">Vue.js</span>
              <span className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-semibold border border-zinc-200/50">Firebase</span>
              <span className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-semibold border border-zinc-200/50">Botpress (NLP)</span>
            </div>
          </div>
          
          <a 
            href="https://github.com/MarcusLiangg/Hack4Good" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shrink-0 shadow-md"
          >
            {/* Inline official GitHub SVG */}
            <svg 
              className="w-5 h-5 fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View Source Code
          </a>
        </div>

      </main>
    </div>
  );
}
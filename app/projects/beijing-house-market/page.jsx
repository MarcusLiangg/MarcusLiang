import Link from 'next/link';
import { ArrowLeft, BarChart3, TrendingDown, AlertTriangle } from 'lucide-react';

export default function BeijingProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">CONFIDENTIAL / INTERNAL ANALYSIS</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <BarChart3 size={14} /> Market Analysis
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Beijing Housing Market Analysis
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Evaluating market risks, bubble indicators, and investment viability using historical property data (2011–2017).
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        {/* Key Findings Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">High Investment Risk</h3>
            <p className="text-zinc-600">Indicators suggest a significant market bubble. Developer defaults could halt construction and trigger massive job losses in the real estate sector.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingDown size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Strategic Recommendation</h3>
            <p className="text-zinc-600">Avoid direct property acquisition at this time. Capital should be redirected to explore opportunities within the Beijing rental market instead.</p>
          </div>
        </div>

        {/* Detailed Report Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-zinc-100 pb-4">Executive Summary</h2>
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 space-y-6">
            <p>
              Acted as the data analytics unit for a large real estate organization looking to venture into the Beijing property market. The goal was to analyze a dataset of Beijing housing prices to provide actionable business insights and recommendations to management.
            </p>
            <p>
              Through comprehensive data visualization and trend analysis using <strong>Tableau</strong> and <strong>Power BI</strong>, we identified unsustainable price-to-income ratios and over-leveraged developer portfolios.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-zinc-100 text-zinc-500 p-6 rounded-2xl text-sm italic text-center border border-zinc-200">
          Note: This analysis is an academic project created for educational purposes only. It does not constitute financial advice.
        </div>
      </main>
    </div>
  );
}
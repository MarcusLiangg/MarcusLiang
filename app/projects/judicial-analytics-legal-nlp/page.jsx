import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, Scale, FileText, BrainCircuit, Database, Target, 
  ShieldAlert, BarChart4, ShieldCheck, Clock, Bot, Cpu, BookOpen, Network, Layers 
} from 'lucide-react';

export default function JudicialNLPProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">NLP / DATA SCIENCE</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Scale size={14} /> Legal Analytics
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Judicial Analytics & Legal NLP
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            A comprehensive Natural Language Processing pipeline designed to extract, process, and analyze complex legal documents and judicial rulings while strictly controlling for data leakage.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        
        {/* Project Image Cover */}
        <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden shadow-sm mb-12">
          <Image 
            src="/projects/legal-nlp.png" 
            alt="Data visualization of Legal NLP analysis architecture"
            fill
            className="object-cover"
            priority 
          />
        </div>

        {/* Executive Summary Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-zinc-100 pb-4">Executive Summary</h2>
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 space-y-6">
            <p>
              Unlike standard text analytics, legal text requires highly specialized extraction and representation due to its dense terminology and rigid structure. This project bridges the gap between computational linguistics and the judicial system by converting raw court judgments into model-ready rows.
            </p>
            <p>
              A major focus of this architecture is leakage control—ensuring the model evaluates pre-decision factual material without being artificially rewarded for reading outcome clues hidden within the text.
            </p>
          </div>
        </div>

        {/* Leakage Controls (Highlighted Box) */}
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100 mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-blue-200/50 pb-4">
            <ShieldCheck className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-zinc-900">Leakage Controls</h2>
          </div>
          <p className="text-zinc-600 text-lg mb-6">
            Leakage control is the strongest part of the project from a portfolio perspective. The model should not be rewarded for reading the answer inside the judgment. The public writeup therefore foregrounds the safeguards rather than presenting performance numbers without context.
          </p>
          <ul className="space-y-4 text-zinc-600">
            <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Remove or isolate sections that directly describe the final decision, relief awarded, or liability finding.</li>
            <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Normalize target labels symmetrically so claims and counterclaims are not accidentally coded in inconsistent directions.</li>
            <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Separate factual summaries from judicial conclusions where the document structure supports it.</li>
            <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Check whether high-performing features are actually proxies for the final outcome.</li>
            <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Evaluate at both row level and case level to avoid overstating performance on duplicated or related examples.</li>
          </ul>
        </div>

        {/* The Pipeline & Methodology (NOW BRIGHT!) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-12">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
            <BrainCircuit className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-zinc-900">Pipeline Design</h2>
          </div>
          
          {/* 📸 IMAGE 1: Extraction & Audit Pipeline */}
          <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-sm border border-zinc-100">
            <Image
              src="/projects/pipeline-diagram.svg" 
              alt="Judicial Analytics Extraction and Audit Pipeline"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-2">
                  <FileText size={18} /> Step 1
                </div>
                <p className="text-sm text-zinc-500">Text Ingestion & Normalization</p>
              </div>
              <div className="md:w-2/3 text-zinc-600">
                The first step standardizes document text so headings, paragraph breaks, dates, monetary references, and party labels can be processed consistently. This step drastically reduces noise before feature extraction begins.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-2">
                  <Database size={18} /> Step 2
                </div>
                <p className="text-sm text-zinc-500">Case and Party Rows</p>
              </div>
              <div className="md:w-2/3 text-zinc-600">
                Instead of treating a judgment as one flat object, the design represents claims, parties, and counterclaims as structured rows. This approach helps prevent mixed signals when a case contains multiple directions of liability or relief.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-2">
                  <Target size={18} /> Step 3
                </div>
                <p className="text-sm text-zinc-500">IRAC-Inspired Extraction</p>
              </div>
              <div className="md:w-2/3 text-zinc-600">
                The pipeline carefully separates issue statements, legal rules, factual application, and conclusions. For modelling purposes, pre-decision factual material is prioritized, as final judicial conclusions often explicitly reveal the label.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-2">
                  <ShieldAlert size={18} /> Step 4
                </div>
                <p className="text-sm text-zinc-500">Temporal Isolation</p>
              </div>
              <div className="md:w-2/3 text-zinc-600">
                Features are strictly limited to approximate what would have been knowable <em>before</em> the case outcome. This requires careful treatment and isolation of dates, procedural history, and explicit decision language to prevent data leakage.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-2">
                  <BarChart4 size={18} /> Step 5
                </div>
                <p className="text-sm text-zinc-500">Embeddings and Baselines</p>
              </div>
              <div className="md:w-2/3 text-zinc-600">
                Legal-domain embeddings can capture semantic patterns in case facts. Traditional models such as boosted trees remain useful as baselines because they make feature importance and failure modes easier to inspect.
              </div>
            </div>
          </div>
        </div>

        {/* Technical Notes (Grid layout) */}
        <h2 className="text-2xl font-bold mb-6 px-2">Technical Notes From Source Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Clock size={20} /></div>
            <h3 className="text-xl font-bold mb-2 text-zinc-900">Temporal Isolation</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Facts are separated from trial-stage and outcome-stage language so the model does not learn from information unavailable before the dispute outcome.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Scale size={20} /></div>
            <h3 className="text-xl font-bold mb-2 text-zinc-900">Counterclaim Handling</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Main claims and counterclaims are represented separately so party roles and labels remain internally consistent.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Bot size={20} /></div>
            <h3 className="text-xl font-bold mb-2 text-zinc-900">LLM-as-Judge QA</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Automated review checks extraction accuracy, JSON validity, semantic consistency, and leakage risk before human intervention.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><BarChart4 size={20} /></div>
            <h3 className="text-xl font-bold mb-2 text-zinc-900">Metric Realignment</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Row-level ROC-AUC is useful for discrimination, while case-level recall and F1 better reflect the practical decision to pursue or avoid a case.</p>
          </div>
        </div>

        {/* Model Architecture Notes (NOW BRIGHT!) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
            <Network className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-zinc-900">Model Architecture Notes</h2>
          </div>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            The source report compared a traditional baseline, a legal-domain transformer baseline, and a custom hierarchical architecture. The portfolio version keeps the model comparison without publishing raw screenshots or unsupported performance claims.
          </p>
          
          {/* 📸 IMAGE 2: Baseline Model Paths */}
          <div className="w-full mb-8 overflow-hidden rounded-2xl shadow-sm border border-zinc-100">
            <Image 
              src="/projects/baseline-models.svg" 
              alt="Baseline Model Paths Before HAN" 
              width={1600} 
              height={600} 
              className="w-full h-auto" 
            />
          </div>

          {/* Grid for Baselines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-200 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="text-blue-600" size={20} />
                <h3 className="font-bold text-zinc-900">XGBoost Baseline</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">Uses early fusion: structured text arrays are concatenated before vectorization. Efficient, but it can blur facts, issues, and legal rules into one flat representation.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-200 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-blue-600" size={20} />
                <h3 className="font-bold text-zinc-900">LEGAL-BERT Baseline</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">Uses legal-domain language representations, but still struggles with long judgments and flat input limits when narrative structure matters.</p>
            </div>
          </div>

          {/* 📸 IMAGE 3: HAN Architecture */}
          <div className="w-full mb-8 overflow-hidden rounded-2xl shadow-sm border border-zinc-100">
            <Image 
              src="/projects/han-architecture.svg" 
              alt="Hierarchical Attention Network" 
              width={1600} 
              height={1200} 
              className="w-full h-auto" 
            />
          </div>

          {/* Grid for HAN & Aggregation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-200 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Network className="text-blue-600" size={20} />
                <h3 className="font-bold text-zinc-900">Hierarchical Attention Network</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">Encodes legal text hierarchically, preserving a stronger separation between fact-level events and case-level representation.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-200 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-blue-600" size={20} />
                <h3 className="font-bold text-zinc-900">Case-Level Aggregation</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">Converts party-level predictions into lawsuit-level signals using aggregation rules aligned with practical legal-risk decisions.</p>
            </div>
          </div>

          {/* 📸 IMAGE 4: Aggregation Logic Table */}
          <div className="w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-100 mt-4">
            <Image 
              src="/projects/aggregation-table.png" 
              alt="Case-level aggregation logic table" 
              width={1600} 
              height={400} 
              className="w-full h-auto" 
            />
          </div>

        </div>

        {/* Tech Stack */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6 text-zinc-900">Technologies Stack</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold">Python</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">PyTorch</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">XGBoost</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">HuggingFace Transformers (LegalBERT)</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Pandas</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">NLTK / SpaCy</span>
            </div>
        </div>

      </main>
    </div>
  );
}
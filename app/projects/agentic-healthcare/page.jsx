import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Stethoscope, GitMerge, Database, ShieldAlert, CheckCircle, Activity, BrainCircuit } from 'lucide-react';

export default function AgenticHealthcareProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-rose-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">LLM ORCHESTRATION / HEALTHCARE</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Activity size={14} /> Agentic AI Architecture
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Agentic Healthcare Analytics Chatbot
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
            A multi-agent analytics workflow that translates natural-language healthcare questions into auditable, structured-data analysis.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm text-zinc-300">
            <CheckCircle size={16} className="text-emerald-400" />
            <span><strong>Role:</strong> Core Team Member & AI Systems Collaborator</span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        
        {/* Main Cover Image
        <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-zinc-200 mb-12 bg-zinc-200">
          <Image 
            src="/projects/healthcare-agentic-cover.jpg" 
            alt="Agentic Healthcare Analytics Interface"
            fill
            className="object-cover"
            priority 
          />
        </div>  */}

        {/* Executive Summary */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-zinc-100 pb-4">Executive Summary</h2>
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 space-y-6">
            <p>
              Healthcare datasets are often structured, relational, and highly sensitive. While LLMs are powerful, a useful clinical assistant must do more than just generate generic SQL: it must clarify intent, ground terms to known medical fields, expose assumptions, and strictly preserve auditability.
            </p>
            <p>
              As a member of this project team, we explored how a healthcare analytics assistant could help clinical and research users ask questions over structured health data <strong>without hiding the analytical path behind a black-box response.</strong>
            </p>
          </div>
        </div>

        {/* Architecture Diagram Gallery */}
        <div className="bg-rose-50/50 rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100 mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-rose-200/50 pb-4">
            <GitMerge className="text-rose-600" size={28} />
            <h2 className="text-2xl font-bold text-zinc-900">System Architecture Gallery</h2>
          </div>
          <p className="text-zinc-600 text-lg mb-8">
            The core design utilizes a multi-agent workflow: interpreting the question, mapping the request to a data schema, proposing SQL/statistical operations, and enforcing Human-In-The-Loop (HITL) review steps.
          </p>
          
          {/* Picture Grid*/}
          <div className="grid grid-cols-1 gap-12">
            
            {/* 1. Agent Pipeline */}
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-6 border border-zinc-200">
                <Image src="/projects/healthcare-pipeline.svg" alt="Agent Pipeline Flow" fill className="object-contain p-4" />
              </div>
              <h3 className="font-bold text-zinc-900 text-xl">Agent Pipeline Workflow</h3>
              <p className="text-zinc-600 mt-2">Routing, clarification, grounding, and SQL generation.</p>
            </div>

            {/* 2. HITL Checkpoint */}
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-6 border border-zinc-200">
                <Image src="/projects/healthcare-hitl.svg" alt="Human in the loop workflow" fill className="object-contain p-4" />
              </div>
              <h3 className="font-bold text-zinc-900 text-xl">HITL Checkpoint Design</h3>
              <p className="text-zinc-600 mt-2">Compulsory review points before sensitive analytical steps.</p>
            </div>

            {/* 3. Vocabulary Pipeline */}
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-6 border border-zinc-200">
                <Image src="/projects/healthcare-vocab.svg" alt="Clinical Vocabulary Grounding Pipeline" fill className="object-contain p-4" />
              </div>
              <h3 className="font-bold text-zinc-900 text-xl">Clinical Vocabulary Resolution</h3>
              <p className="text-zinc-600 mt-2">Grounding terms via ClinicalBERT, FAISS, and ATHENA metadata.</p>
            </div>

          </div>
        </div>

        {/* The Multi-Agent Workflow */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-800 mb-12 text-zinc-100">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <BrainCircuit className="text-rose-400" size={28} />
            <h2 className="text-2xl font-bold">The Multi-Agent Workflow</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold mb-2">
                <ShieldAlert size={18} /> 1. Intent & Routing
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Classifies the analytical type (cohort counting, trends, etc.). An Intent Clarifier detects underspecified questions and asks the user for clarification before forcing a query.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold mb-2">
                <Database size={18} /> 2. Schema Grounding
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Maps natural-language concepts to known tables, fields, and controlled vocabularies using FAISS and ClinicalBERT, preventing the AI from hallucinating invalid medical columns.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold mb-2">
                <GitMerge size={18} /> 3. SQL Generation (DuckDB)
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A dedicated SQL agent receives dynamic schema pruning (only relevant metadata) to generate explainable DuckDB SQL, drastically reducing prompt clutter and errors.
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold mb-2">
                <CheckCircle size={18} /> 4. Human-In-The-Loop
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Positions the assistant as a copilot, not an autonomous doctor. Intermediate artifacts (query plans, generated SQL) are stored in a Data Registry for human review and auditing.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6 text-zinc-900">Technologies Stack</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">AI & Orchestration</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm font-semibold">LangGraph</span>
                  <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm font-semibold">ClinicalBERT</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">FAISS</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Large Language Models (LLMs)</span>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Data & Engineering</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">DuckDB</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">SQL</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">OMOP Common Data Model</span>
                  <span className="px-3 py-1.5 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Human-in-the-Loop (HITL)</span>
                </div>
              </div>
            </div>
        </div>

      </main>
    </div>
  );
}
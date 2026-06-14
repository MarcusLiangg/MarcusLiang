import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, Database, BrainCircuit, ShieldAlert, LineChart, 
  Briefcase, Target, Activity, Trophy, Server, Network 
} from 'lucide-react';
import { PROJECTS_DATA } from '../../../data/projects';

export default function P2PLoanProject() {
  const project = PROJECTS_DATA.find(p => p.id === "p2p-loan-default");

  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">FINTECH / MACHINE LEARNING</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Database size={14} /> Big Data Analytics
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {project.shortDesc}
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        
        {/* Project Image Cover */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12 bg-zinc-100 border border-zinc-200/50 shadow-sm">
          <Image 
            src={project.image} 
            alt="P2P Loan Default Prediction Dashboard"
            fill
            className="object-cover"
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
                {project.starContent.situation}
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
                {project.starContent.task}
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
                {project.starContent.action}
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
                {project.starContent.result}
              </p>
            </div>

          </div>
        </div>

        {/* Technical Architecture Notes */}
        <h2 className="text-2xl font-bold mb-6 px-2">Data Engineering & ML Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Distributed Processing</h3>
            <p className="text-zinc-600 leading-relaxed">Utilized Apache Spark (PySpark) to process 1.7GB of data efficiently, bypassing local memory constraints and accelerating the ETL pipeline.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Network size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Class Imbalance Handling</h3>
            <p className="text-zinc-600 leading-relaxed">Default records are inherently rare. Applied advanced resampling methods via Imbalanced-learn (e.g., SMOTE) to ensure the model learned risk factors rather than simply predicting the majority class.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Feature Engineering</h3>
            <p className="text-zinc-600 leading-relaxed">Extracted and engineered critical financial features such as debt-to-income (DTI) ratios, credit utilization, and historical payment behaviors to feed the classification algorithm.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Recall-Optimized Metrics</h3>
            <p className="text-zinc-600 leading-relaxed">Prioritized <em>Recall</em> (82%) over raw accuracy. In risk management, the cost of a False Negative (missing a default) far outweighs a False Positive (flagging a safe loan for review).</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6 text-zinc-100">Technologies Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-lg text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
        </div>

      </main>
    </div>
  );
}
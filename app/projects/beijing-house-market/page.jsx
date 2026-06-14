import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BarChart3, Map, Building2, AlertTriangle, Briefcase, Target, Activity, Trophy } from 'lucide-react';
import { PROJECTS_DATA } from '../../../data/projects';

export default function BeijingMarketProject() {
  // Find the project data
  const project = PROJECTS_DATA.find(p => p.id === "beijing-house-market");

  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">DATA ANALYTICS</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <BarChart3 size={14} /> Market Research
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
        <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-zinc-200 mb-12 bg-zinc-200">
          <Image 
            src={project.image} 
            alt="Beijing House Market Dashboard"
            fill
            className="object-cover"
            priority 
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

        {/* Key Business Insights (Extracted directly from your slides!) */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-800 mb-12 text-zinc-100">
          <h2 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">Key Business Insights Delivered</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-red-400 font-bold mb-2">
                  <AlertTriangle size={18} /> The Housing Bubble
                </div>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Identified a severe "Seller's Market" where Days on Market (DOM) was increasing alongside soaring prices. Speculative buyers leveraging loans created a high risk of developer defaults, posing a systemic risk to the 16.4% of China's GDP reliant on real estate.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <Building2 size={18} /> Market Positioning
                </div>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Data revealed that Towers and Plate-and-Tower combinations represented 44% of the market. However, due to impending government cooling policies, the team advised delaying development ventures and exploring the rental market instead.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <Map size={18} /> Optimal Configurations
                </div>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Through permutation analysis, established the ideal property attributes for future portfolio acquisitions to minimize DOM: 2 Bathrooms, 2-3 Drawing Rooms, 1-2 Kitchens, and 4-5 Living Rooms. Furthermore, 61.6% of properties had refined or simple renovations, indicating a strong secondary market for renovation value-add.
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-zinc-900">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-semibold border border-zinc-200/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-xs text-zinc-400 max-w-xs md:text-right">
              * Note: This analysis was an academic project created for educational purposes only. It does not constitute financial advice.
            </div>
        </div>

      </main>
    </div>
  );
}
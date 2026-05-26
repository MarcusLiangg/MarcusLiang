// app/page.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { TerminalSquare, GraduationCap, FolderGit2, Code2, Mail, FileDown, Briefcase } from 'lucide-react';
import Terminal from '../components/Terminal';
import { PROJECTS_DATA } from '../data/projects';
import Image from 'next/image';

// Extract unique categories for the filter buttons
const ALL_CATEGORIES = ["All", ...new Set(PROJECTS_DATA.flatMap(p => p.categories))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeCategory === "All") return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-zinc-50/80 backdrop-blur-md z-50 border-b border-zinc-200">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">E-Portfolio</span>
          <ul className="flex items-center gap-6 font-medium text-sm hidden md:flex">
            <li><Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="#experience" className="hover:text-blue-600 transition-colors">Experience</Link></li>
            <li><Link href="#education" className="hover:text-blue-600 transition-colors">Education</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Connect</Link></li>
            {/* Resume Download Button */}
            <li>
              <a 
                href="/Marcus_Liang_Resume.pdf" 
                download="Marcus_Liang_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 rounded-full transition-all font-semibold"
              >
                <FileDown size={16} />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Section: Home (CLI) */}
        <section id="home" className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center justify-center bg-zinc-50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl flex flex-col gap-8 items-center"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-2">
                <TerminalSquare size={14} /> Chatbot Terminal OS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Hello, I'm <span className="text-blue-600">Marcus Liang</span>.
              </h1>
              <p className="text-lg text-zinc-500 max-w-xl mx-auto">
                Interact with the chatbot terminal below to learn more about my stack, or scroll down to view my full background.
              </p>
            </div>
            <Terminal />
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 mt-4 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Agentic backend powered by OpenAI
            </div>
          </motion.div>
        </section>

        {/* Section: Experience */}
        <section id="experience" className="min-h-screen py-24 px-6 bg-white flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
            </div>
            
            <div className="space-y-8">
              {/* Job 1: X-Star Technology */}
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    {/*X-STAR: Logo and Title Container*/}
                    <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm shrink-0">
                          <Image 
                            src="/experience/xstar-logo.png" 
                            alt="X-Star Technology Logo" 
                            fill 
                            className="object-contain p-1" 
                          />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 leading-tight">Data Scientist Intern</h3>
                            <p className="text-lg text-blue-600 font-semibold mt-1">X-Star Technology</p>
                        </div>
                    </div>

                    <span className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap self-start">
                      Dec 2024 – Dec 2025
                    </span>
                 </div>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">Machine Learning</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">Python</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">SQL</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">Data Visualization</span>
                    <span className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-semibold">FinTech</span>
                    <span className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-semibold">Financial Services</span>
                 </div>

                 <div className="mb-6">
                   <h4 className="font-bold text-zinc-900 mb-3 text-sm uppercase tracking-wider">Key Responsibilities</h4>
                   <ul className="space-y-2 text-zinc-600">
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Engineered predictive repayment models using Random Forest and XGBoost to identify loaner's patterns and flag high-risk accounts, improving loan recovery efficiency.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Included in developing machine learning models to analyse financial and behavioural data for credit risk assessment, increasing automated approval rates by ~80%; collaborated with cross-functional teams in Beijing.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Architected interactive Power BI dashboards visualise repayment performance and track KPIs for dealer network, supporting decision-making.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Executed financial Vintage Analysis grouped by Months on Books (MOB) to evaluate long-term loan performance and forecast future outcomes, such as early settlements.</li>
                   </ul>
                 </div>

                 <div className="p-4 bg-white rounded-xl border border-zinc-100 text-sm">
                   <h4 className="font-bold text-zinc-900 mb-2">Technologies Used</h4>
                   <p className="text-zinc-600"><strong className="text-zinc-900">Languages:</strong> Python, SQL, JavaScript</p>
                   <p className="text-zinc-600 mt-1"><strong className="text-zinc-900">Tools:</strong> MySQL Server, VS Code, Excel, Lark</p>
                 </div>
              </div>

              {/* Job 2: Shopee */}
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    {/* SHOPEE: Logo and Title Container */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm shrink-0">
                          <Image 
                            src="/experience/shopee-logo.png" 
                            alt="Shopee Logo" 
                            fill 
                            className="object-cover" // NO padding, object-cover makes it fill the container perfectly!
                          />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 leading-tight">Cross-Border E-Commerce Intern</h3>
                            <p className="text-lg text-blue-600 font-semibold mt-1">Shopee</p>
                        </div>
                    </div>
                    <span className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap self-start">
                      Sep 2020 – Feb 2021
                    </span>
                 </div>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">Python</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">SQL</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">Data Visualization</span>
                    <span className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-semibold">E-Commerce</span>
                 </div>

                 <div className="mb-6">
                   <h4 className="font-bold text-zinc-900 mb-3 text-sm uppercase tracking-wider">Key Responsibilities</h4>
                   <ul className="space-y-2 text-zinc-600">
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Automated key operational processes using Google Sheets and email notifications, reducing manual workload by up to 10 hours per week.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Developed and implemented SQL queries to extract and analyse critical sales data, empowering data-driven decisions on customer behaviour and sales trends.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Conducted in-depth analysis of monthly sales data to uncover trends and visualise insights through dynamic dashboards.</li>
                   </ul>
                 </div>

                 <div className="p-4 bg-white rounded-xl border border-zinc-100 text-sm">
                   <h4 className="font-bold text-zinc-900 mb-2">Technologies Used</h4>
                   <p className="text-zinc-600"><strong className="text-zinc-900">Languages:</strong> Python, SQL, JavaScript</p>
                   <p className="text-zinc-600 mt-1"><strong className="text-zinc-900">Tools:</strong> In-house query system, Google Sheets</p>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section id="education" className="min-h-screen py-24 px-6 bg-zinc-50 flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Education</h2>
            </div>
            
            <div className="border-l-2 border-zinc-200 pl-8 space-y-12">
              {/* Timeline Item 1: NUS */}
              <div className="relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-white" />
                <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Aug 2023 - Dec 2026</span>
                <h3 className="text-2xl font-bold mt-1">National University of Singapore</h3>
                <p className="text-lg text-zinc-600 font-medium">B.Sc. Business Analytics (Honours)</p>
                <p className="text-zinc-500 mt-2">
                  <b>Specialization:</b> Machine Learning.<br />
                  <b>Relevant Coursework:</b> BT4221 Advanced Analytics with Big Data Technologies, Machine Learning for Predictive Data Analytics.
                </p>
              </div>

              {/* Timeline Item 2: Ngee Ann Poly */}
              <div className="relative">
                <div className="absolute w-4 h-4 bg-zinc-400 rounded-full -left-[41px] top-1 border-4 border-white" />
                <span className="text-sm font-semibold text-zinc-500 tracking-wider uppercase">Apr 2018 - May 2021</span>
                <h3 className="text-2xl font-bold mt-1">Ngee Ann Polytechnic</h3>
                <p className="text-lg text-zinc-600 font-medium">Diploma with Merit in Financial Informatics</p>
                <p className="text-zinc-500 mt-2">
                <b>Specialization:</b> Financial Analytics. <br/> 
                <b>Relevant Coursework:</b> Deep Learning, Predictive Analytics, Applied Analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="min-h-screen py-24 px-6 bg-white flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-8">
              <FolderGit2 className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {ALL_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-zinc-50 rounded-2xl p-6 shadow-sm border border-zinc-200 hover:shadow-md hover:border-blue-200 transition-all flex flex-col group relative"
                  >
                    {/* The Clickable Overlay */}
                    <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${project.title}`} />
                    
                    {/* 📸 THE IMAGE GOES HERE! */}
                    {project.image && (
                      <div className="aspect-video bg-zinc-200 rounded-lg mb-6 overflow-hidden relative z-0">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* The Text Content */}
                    <div className="flex justify-between items-start mb-2 gap-2 relative z-0">
                        <h3 className="text-xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    </div>
                    <div className="text-xs font-semibold text-blue-600 tracking-wider mb-4 uppercase relative z-0">{project.date}</div>
                    
                    <p className="text-zinc-500 text-sm mb-6 flex-grow relative z-0">{project.shortDesc}</p>
                    
                    <p className="text-zinc-500 text-sm mb-6 flex-grow relative z-0">{project.shortDesc}</p>
                    
                    {/* Tags Container */}
                    <div className="flex flex-col gap-3 mt-auto relative z-0">
                      
                      {/* Grey Category Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.categories?.map(cat => (
                          <span key={cat} className="px-2 py-1 bg-white border border-zinc-200 text-zinc-600 rounded text-xs font-medium">
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Blue Technology Tags */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
                          {project.technologies.map(tech => (
                            <span key={tech} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section id="skills" className="min-h-screen py-24 px-6 bg-zinc-50 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category 1 */}
              <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                <h3 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">Machine Learning</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">Scikit-learn, XGBoost, PyTorch, Random Forest, Model Validation (PSI)</p>
              </div>

              {/* Category 2 */}
              <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                <h3 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">Data Engineering</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">Databricks, Apache Spark, Snowflake, AWS, ETL Pipelines</p>
              </div>

              {/* Category 3 */}
              <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                <h3 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">Languages</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">Python, SQL, Java, C#, R, JavaScript</p>
              </div>

              {/* Category 4 */}
              <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                <h3 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">Visualization & Tools</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">Power BI (DAX), Tableau, Matplotlib, UiPath</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Let's Connect */}
        <section id="contact" className="min-h-[80vh] py-24 px-6 bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center selection:bg-blue-500/30">
          <div className="max-w-3xl w-full text-center space-y-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-inner mb-2">
              <Mail className="text-blue-500" size={36} />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's Connect.</h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              I am always open to discussing data strategy, open-source projects, or the latest in cloud tech. Feel free to reach out via LinkedIn or email me 😀
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:marcusliang@u.nus.edu" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 active:scale-95"
              >
                <Mail size={20} />
                marcusliang@u.nus.edu
              </a>
              <a 
                href="https://www.linkedin.com/in/liangmarcus/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 text-white font-semibold transition-all hover:scale-105 active:scale-95"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/MarcusLiangg" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 text-white font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Github
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
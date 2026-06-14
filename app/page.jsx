// app/page.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { TerminalSquare, GraduationCap, FolderGit2, Code2, Mail, FileDown, Briefcase, ArrowUpRight, Target, Trophy } from 'lucide-react';
import Terminal from '../components/Terminal';
import { PROJECTS_DATA } from '../data/projects';
import Image from 'next/image';

// Extract unique categories for the filter buttons
const ALL_CATEGORIES = ["All", ...new Set(PROJECTS_DATA.flatMap(p => p.categories))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // NEW: State to track which project is selected in the split-view
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0]?.id);

  // Filter projects based on active category
  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeCategory === "All") return true;
    return project.categories.includes(activeCategory);
  });

  const activeProject = filteredProjects.find(p => p.id === selectedProjectId) || filteredProjects[0];

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* Navigation */}
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
        <section id="home" className="relative min-h-screen pt-24 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden">
          
          {/* --- THE WALLPAPER LAYER --- */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/desktop-bg.jpg')" }}
          />
          
          {/* Optional: A very light dark overlay to make sure the terminal pops */}
          <div className="absolute inset-0 z-0 bg-black/10" />

          {/* --- Content Layer --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-3xl flex flex-col gap-8 items-center"
          >
            {/* Header Text (Now inside a sleek glassmorphism card so it stays readable!) */}
            <div className="text-center space-y-4 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold mb-2 shadow-sm backdrop-blur-md border border-white/50">
                <TerminalSquare size={14} /> Chatbot Terminal OS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900">
                Hello, I'm <span className="text-blue-600">Marcus Liang</span>.
              </h1>
              <p className="text-lg text-zinc-700 max-w-xl mx-auto font-medium">
                Interact with the chatbot terminal below to learn more about my stack, or drag it around the screen!
              </p>
            </div>

            {/* --- The Draggable Terminal --- */}
            <motion.div
              drag
              dragMomentum={false}
              dragConstraints={{ left: -600, right: 600, top: -400, bottom: 400 }}
              className="w-full cursor-move"
              whileHover={{ scale: 1.01 }} 
              whileDrag={{ scale: 1.02, cursor: "grabbing" }} 
            >
              <div className="cursor-auto pointer-events-auto">
                <Terminal />
              </div>
            </motion.div>

            {/* Status Indicator (Also updated with glassmorphism to match) */}
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-700 mt-4 font-medium px-4 py-2 rounded-full border border-white/40 bg-white/60 backdrop-blur-md shadow-sm">
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
            
            <div className="space-y-8 relative">
              {/* Optional: The vertical timeline line itself */}
              <div className="absolute left-[39px] md:left-[47px] top-10 bottom-10 w-0.5 bg-zinc-100 z-0"></div>

              {/* Job 1: PhillipCapital (NEW - Most Recent) */}
              {/* Apply Animations Here */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm transition-shadow duration-300 group hover:shadow-md hover:border-zinc-300 hover:bg-white mb-8"
              >
                 <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    {/* PhillipCapital: Logo and Title Container */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm shrink-0 p-2">
                          <Image 
                            src="/experience/phillip-logo.jpg" 
                            alt="PhillipCapital Logo" 
                            fill 
                            className="object-contain p-1" 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 leading-tight">Business Analyst Intern</h3>
                            <p className="text-lg text-blue-600 font-semibold mt-1">PhillipCapital</p>
                        </div>
                    </div>

                    <span className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap self-start">
                      May 2026 – Jul 2026
                    </span>
                 </div>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">RPA Automation</span>
                    <span className="px-2.5 py-1 bg-blue-100/50 text-blue-700 rounded-md text-xs font-semibold">AI Integration</span>
                    <span className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-semibold">Business Analytics</span>
                    <span className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-semibold">Financial Services</span>
                 </div>

                 <div className="mb-6">
                   <h4 className="font-bold text-zinc-900 mb-3 text-sm uppercase tracking-wider">Key Responsibilities</h4>
                   <ul className="space-y-2 text-zinc-600">
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Developing an AI-integrated RPA framework to not only automate standard reporting but also parse data to extract actionable business insights.</li>
                     <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Spearheading integration of mainstream AI tools with UiPath workflows, transforming static reports into dynamic, insight-driven analytics while saving up to 8 man-hours per reporting cycle.</li>
                   </ul>
                 </div>

                 <div className="p-4 bg-white rounded-xl border border-zinc-100 text-sm">
                   <h4 className="font-bold text-zinc-900 mb-2">Technologies Used</h4>
                   <p className="text-zinc-600"><strong className="text-zinc-900">Tools:</strong> UiPath, AI Models, Automation Frameworks</p>
                 </div>
              </motion.div>

              {/* Job 2: X-Star Technology */}
              {/* Apply Animations Here */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm transition-shadow duration-300 group hover:shadow-md hover:border-zinc-300 hover:bg-white"
              >
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
              </motion.div>

              {/* Job 3: Shopee */}
              {/* Apply Animations Here */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm transition-shadow duration-300 group hover:shadow-md hover:border-zinc-300 hover:bg-white"
              >
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
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section id="education" className="min-h-screen py-24 px-6 bg-zinc-50 flex flex-col items-center justify-center overflow-hidden">
          <div className="max-w-4xl w-full">
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-3 mb-12"
            >
              <GraduationCap className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Education</h2>
            </motion.div>
            
            <div className="border-l-2 border-zinc-200 pl-8 space-y-12 relative">
              
              {/* Timeline Item 1: NUS */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group cursor-default"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-white group-hover:scale-125 transition-transform duration-300" />
                
                {/* Content */}
                <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-transparent shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
                  
                  {/* NEW: Semi-Blue Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500/80 transition-all duration-300 group-hover:bg-blue-600" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-4 pl-2"> {/* Added pl-2 to push content slightly right of the bar */}
                    <div className="flex items-center gap-4 md:gap-5">
                      {/* School Logo Container */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm shrink-0">
                        <Image 
                          src="/education/nus.jpg" 
                          alt="National University of Singapore Logo" 
                          fill 
                          className="object-contain p-2" 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Aug 2023 - Dec 2026</span>
                        <h3 className="text-2xl font-bold mt-1 text-zinc-900">National University of Singapore</h3>
                        <p className="text-lg text-zinc-600 font-medium">B.Sc. Business Analytics (Honours)</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-500 mt-3 leading-relaxed border-t border-zinc-100 pt-4 pl-2">
                    <strong className="text-zinc-700">Specialization:</strong> Machine Learning.<br />
                    <strong className="text-zinc-700">Relevant Coursework:</strong> BT4221 Advanced Analytics with Big Data Technologies, Machine Learning for Predictive Data Analytics.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 2: Ngee Ann Poly */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="relative group cursor-default"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-zinc-400 group-hover:bg-blue-400 rounded-full -left-[41px] top-1 border-4 border-white group-hover:scale-125 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-transparent shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
                  
                  {/* NEW: Semi-Blue Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-400/60 transition-all duration-300 group-hover:bg-blue-500/80" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-4 pl-2">
                    <div className="flex items-center gap-4 md:gap-5">
                      {/* School Logo Container */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm shrink-0">
                        <Image 
                          src="/education/np.png" 
                          alt="Ngee Ann Polytechnic Logo" 
                          fill 
                          className="object-contain p-2" 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-zinc-500 tracking-wider uppercase">Apr 2018 - May 2021</span>
                        <h3 className="text-2xl font-bold mt-1 text-zinc-900">Ngee Ann Polytechnic</h3>
                        <p className="text-lg text-zinc-600 font-medium">Diploma with Merit in Financial Informatics</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-500 mt-3 leading-relaxed border-t border-zinc-100 pt-4 pl-2">
                    <strong className="text-zinc-700">Specialization:</strong> Financial Analytics. <br/> 
                    <strong className="text-zinc-700">Relevant Coursework:</strong> Deep Learning, Predictive Analytics, Applied Analytics.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
        {/* Section: Projects (Master-Detail Split View) */}
        <section id="projects" className="min-h-screen py-24 px-6 bg-white flex flex-col items-center justify-center">
          <div className="max-w-7xl mx-auto w-full"> {/* Widened slightly to max-w-7xl for the new grid */}
            
            <div className="flex items-center gap-3 mb-8">
              <FolderGit2 className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {ALL_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    const newFiltered = PROJECTS_DATA.filter(p => category === "All" || p.categories.includes(category));
                    if (newFiltered.length > 0) setSelectedProjectId(newFiltered[0].id);
                  }}
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

            {/* Split Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[600px]">
              
              {/* LEFT PANEL: Project List (Master) */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => {
                    const isSelected = selectedProjectId === project.id;
                    return (
                      <motion.button
                        key={project.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={() => setSelectedProjectId(project.id)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${
                          isSelected 
                            ? "bg-blue-50 border-blue-200 shadow-sm" 
                            : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm"
                        }`}
                      >
                        <h3 className={`text-lg font-bold mb-1 transition-colors ${isSelected ? "text-blue-700" : "text-zinc-900 group-hover:text-blue-600"}`}>
                          {project.title}
                        </h3>
                        <div className={`text-xs font-bold uppercase tracking-wider ${isSelected ? "text-blue-500" : "text-zinc-400"}`}>
                          {project.date}
                        </div>
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
              </div>

              {/* RIGHT PANEL: Project Details (Detail) */}
              <div className="lg:col-span-8">
                {activeProject ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col relative h-full"
                    >
                      
                      {/* 1. NEW HEADER: Title, Date, Button, and Tech Stack up top! */}
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-6 border-b border-zinc-100 pb-6">
                        <div className="flex-grow">
                          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">{activeProject.title}</h2>
                          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{activeProject.date}</p>
                          
                          {/* Tech Stack moved up for immediate visibility */}
                          <div className="flex flex-wrap gap-2">
                            {activeProject.technologies?.map(tech => (
                              <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-md text-xs font-semibold border border-zinc-200/60">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Link 
                          href={`/projects/${activeProject.id}`} 
                          className="flex items-center justify-center gap-1.5 px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-zinc-800 transition-colors shrink-0 shadow-md"
                        >
                          View Case Study <ArrowUpRight size={18} />
                        </Link>
                      </div>

                      {/* 2. BANNER IMAGE: Shorter, wider, less intrusive */}
                      {activeProject.image && (
                        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 bg-zinc-100 shrink-0 border border-zinc-200/50">
                          <Image 
                            src={activeProject.image} 
                            alt={activeProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* 3. CONTENT: Side-by-Side Dashboard layout for STAR */}
                      <div className="flex-grow">
                        {activeProject.starContent ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Challenge Column */}
                            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 h-full">
                              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Target size={16} className="text-blue-500" /> The Challenge
                              </h4>
                              <p className="text-zinc-600 text-sm leading-relaxed">
                                {activeProject.starContent.situation}
                              </p>
                            </div>
                            
                            {/* Result Column */}
                            <div className="bg-emerald-50/30 p-5 rounded-2xl border border-emerald-100 h-full">
                              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Trophy size={16} className="text-emerald-600" /> The Result
                              </h4>
                              <p className="text-zinc-600 text-sm leading-relaxed">
                                {activeProject.starContent.result}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                            <p className="text-zinc-600 text-base leading-relaxed">
                              {activeProject.shortDesc}
                            </p>
                          </div>
                        )}
                      </div>

                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="h-full flex items-center justify-center text-zinc-400 font-medium bg-zinc-50 rounded-3xl border border-zinc-200 border-dashed min-h-[400px]">
                    No projects found for this category.
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="skills" className="min-h-screen py-24 px-6 bg-zinc-50 flex flex-col items-center justify-center overflow-hidden">
          <div className="max-w-6xl w-full">
            
            {/* Animated Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-3 mb-12"
            >
              <Code2 className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold tracking-tight">Skills Summary</h2>
            </motion.div>

            {/* Staggered Grid Container */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1 // Delays each card by 0.1s for a waterfall effect
                  }
                }
              }}
              // Upgraded to 3 columns on large screens to fit the 8 items better!
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            >
              {[
                {
                  title: "Generative AI & Deep Learning",
                  skills: "LangChain, LangGraph, FAISS (Vector Stores), PyTorch"
                },
                {
                  title: "Machine Learning",
                  skills: "Supervised & Unsupervised Learning (Random Forest, XGBoost, Clustering), Scikit-learn, Model Validation (PSI)"
                },
                {
                  title: "Deployment & Model Serving",
                  skills: "Docker, FastAPI, Flask, MLFlow, DataOps, DevOps, GitHub (Version Control)"
                },
                {
                  title: "Programming Languages & Runtimes",
                  skills: "Python, SQL (MySQL), Java, C#, R, JavaScript, Node.js"
                },
                {
                  title: "Data Engineering & Cloud",
                  skills: "Databricks, Apache Spark, AWS, Snowflake, ETL Pipelines"
                },
                {
                  title: "Data Analytics & BI",
                  skills: "Pandas, NumPy, Power BI (DAX), Tableau, Matplotlib, Vintage Analysis"
                },
                {
                  title: "Automation & Tools",
                  skills: "UiPath, Advanced Excel"
                },
                {
                  title: "Core Competencies",
                  skills: "Analytical Problem-Solving, Continuous Learning, Adaptability, Communication, Teamwork, Time Management"
                }
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                  whileHover={{ scale: 1.02 }} // Subtle lift on hover
                  className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-md transition-all group flex flex-col"
                >
                  <h3 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed font-medium mt-auto">
                    {category.skills}
                  </p>
                </motion.div>
              ))}
            </motion.div>

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
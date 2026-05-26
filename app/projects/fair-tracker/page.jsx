import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search, TrendingUp, MapPin, ListChecks, Bell, MessageSquare, ExternalLink, RefreshCw } from 'lucide-react';

export default function FairTrackerProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">BT3103 COURSEWORK</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Search size={14} /> Full-Stack Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            The Fair Tracker
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Empowering Singaporeans to combat inflation with real-time grocery price comparisons, dynamic watchlists, and historical trends.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        <div className="w-full relative aspect-video rounded-3xl overflow-hidden shadow-sm border border-zinc-200 mb-12 bg-zinc-200">
          <Image 
            src="/projects/fair_tracker.jpg" 
            alt="The Fair Tracker App Interface"
            fill
            className="object-cover"
            priority 
          />
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-zinc-100 pb-4">Project Overview</h2>
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 space-y-6">
            <p>
              In recent years, rising living costs and food inflation have made grocery shopping increasingly stressful for many Singaporeans. Global economic disruptions have affected local pricing, making transparency more essential than ever. 
            </p>
            <p>
              The Fair Tracker was built to address this challenge—a centralized, user-friendly platform that empowers consumers to compare prices across major supermarket chains (NTUC, Sheng Siong, etc.) to make smarter, cost-effective decisions. Our platform serves a diverse audience, from budget-conscious students to families and seniors. By creating an account, users unlock personalized tools to track spending, monitor price drops, and manage grocery lists dynamically.
            </p>
          </div>
        </div>

        {/* Agile Methodology Section (Custom designed for this project) */}
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100 mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-blue-200/50 pb-4">
            <RefreshCw className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-zinc-900">Agile Development Methodology</h2>
          </div>
          <p className="text-zinc-600 text-lg mb-8">
            This project was executed using the SCRUM methodology over two intensive 2-week sprints, simulating a real-world software development lifecycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-2">The Process</h3>
              <p className="text-sm text-zinc-600">Guided by a refined product backlog, we successfully mapped, groomed, and implemented exactly 24 core user stories.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-2">Collaboration</h3>
              <p className="text-sm text-zinc-600">Maintained rigorous Agile practices including strict Sprint Planning, Daily Stand-ups, and post-sprint Retrospectives.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-2">Tooling</h3>
              <p className="text-sm text-zinc-600">Progress tracked actively via Google Sheets and GitHub Projects, with full UI/UX prototyping conducted in Figma.</p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <h2 className="text-2xl font-bold mb-6 px-2">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Search size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Price Comparison</h3>
            <p className="text-zinc-600 leading-relaxed">Instantly compare product prices across multiple major supermarket chains to find the best deals.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><TrendingUp size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Historical Trends</h3>
            <p className="text-zinc-600 leading-relaxed">Interactive line charts powered by VueChartkick to visualize product price fluctuations over time.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><MapPin size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Store Locator</h3>
            <p className="text-zinc-600 leading-relaxed">Integrated Google Maps API to help users geographically locate the nearest supermarket with the cheapest inventory.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><ListChecks size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Smart Grocery List</h3>
            <p className="text-zinc-600 leading-relaxed">Create, organize, and manage digital shopping lists directly within the application.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Bell size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Watchlist & Alerts</h3>
            <p className="text-zinc-600 leading-relaxed">Bookmark favorite items and receive automated alerts when their prices drop across tracked stores.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><MessageSquare size={24} /></div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Community Reviews</h3>
            <p className="text-zinc-600 leading-relaxed">Read and write product reviews to foster a community-driven approach to smart grocery shopping.</p>
          </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-zinc-100">Technologies Stack</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">Vue.js</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">Vuetify</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">VueChartkick</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">Firebase</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">VueChartkick</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">Google Maps API</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">JavaScript</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">HTML5</span>
              <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold">CSS3</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a 
              href="https://github.com/BT3103AppDev1/l2-finaltermproject-2425s2l2_group_2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-full transition-all border border-zinc-700"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://l2-2425s2l2-group-2.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-md"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-zinc-100 text-zinc-500 p-6 rounded-2xl text-sm italic border border-zinc-200">
          <strong>Disclaimer:</strong> This project was developed as part of the BT3103 Application Systems Development for Business Analytics coursework. Prices displayed in the application are simulated for educational purposes due to API limitations.
        </div>

      </main>
    </div>
  );
}
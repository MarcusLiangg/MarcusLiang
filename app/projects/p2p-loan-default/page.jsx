import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Database, GitBranch, ShieldAlert, BarChart4, TrendingDown, Target, BrainCircuit } from 'lucide-react';

export default function P2PLoanProject() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans selection:bg-blue-500/30 pb-24">
      
      {/* Custom Minimal Header */}
      <header className="bg-zinc-950 text-zinc-50 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-zinc-500">BIG DATA / ML PIPELINE</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldAlert size={14} /> Risk Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            P2P Loan Default Prediction System
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Developing a robust machine learning pipeline to analyze 2.9 million loan records, mitigating financial risk by identifying high-probability defaulters.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
        
        {/* Optional Image Cover */}
        <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-zinc-200 mb-12 bg-zinc-200">
          <Image 
            src="/projects/LC.png" 
            alt="Data visualization of loan default predictions"
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
              With the increasing reliance on credit for daily essentials and major purchases, managing risk has become imperative for financial institutions. This project utilizes Lending Club's extensive online dataset (spanning 2007 to 2020) to address the critical challenge of credit default prediction on Peer-to-Peer (P2P) platforms.
            </p>
            <p>
              The core objective was to build an end-to-end Big Data machine learning pipeline capable of parsing 1.7 GB of data (over 2.9 million records). By identifying high-risk borrowers and forecasting the likelihood of default, the resulting model enables firms to minimize financial losses while safely maximizing profitable lending opportunities.
            </p>
          </div>
        </div>

        {/* The Pipeline & Methodology (Custom Data Science Layout) */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-800 mb-12 text-zinc-100">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <GitBranch className="text-blue-500" size={28} />
            <h2 className="text-2xl font-bold">Data Pipeline & Methodology</h2>
          </div>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <Database size={18} /> Big Data Processing
                </div>
                <p className="text-sm text-zinc-400">Handling the 1.7GB Payload</p>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Utilized <strong>PySpark</strong> within a Google Colab Pro environment to handle data cleaning and preprocessing for over 2.9 million rows. This included standardizing inconsistent formats and imputing missing values at scale.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <BarChart4 size={18} /> Feature Engineering
                </div>
                <p className="text-sm text-zinc-400">PCA & Custom Indicators</p>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Engineered custom risk indicators such as <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-blue-300">credit_util_ratio</code> and <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-blue-300">installment_to_income_ratio</code>. Applied Principal Component Analysis (PCA) to reduce 83 features down to 62, capturing 95% of the variance while drastically reducing computational load.
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <Target size={18} /> Handling Imbalance
                </div>
                <p className="text-sm text-zinc-400">Overcoming the 13% Deficit</p>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Defaulters represented only ~13% of the dataset. Implemented hybrid resampling strategies—specifically <strong>SMOTE + ENN</strong> (Synthetic Minority Over-sampling Technique combined with Edited Nearest Neighbours)—to aggressively improve the model’s ability to detect the minority class.
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <BrainCircuit size={18} /> Predictive Modeling
                </div>
                <p className="text-sm text-zinc-400">Algorithm Evaluation</p>
              </div>
              <div className="md:w-2/3 text-zinc-300">
                Trained and evaluated six different classifiers including Logistic Regression, Random Forest, and Gradient-Boosted Trees (GBT) to find the optimal balance between precision and recall.
              </div>
            </div>
          </div>
        </div>

        {/* Business Impact / Key Findings */}
        <h2 className="text-2xl font-bold mb-6 px-2">Key Findings & Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingDown size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">Highest Risk Predictors</h3>
            <p className="text-zinc-600 leading-relaxed">Analysis revealed that borrower hardship reasons, assigned loan grades, and home ownership status (specifically renting) were the strongest leading indicators of a default event.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">0.82 Model Recall</h3>
            <p className="text-zinc-600 leading-relaxed">The optimized Random Forest model achieved a Recall score of 0.82, ensuring that the vast majority of potential defaulters are correctly identified prior to loan approval.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6 text-zinc-900">Technologies Stack</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold">PySpark</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Google Colab Pro</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Imbalanced-learn</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Pandas & NumPy</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Matplotlib</span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold">Matplotlib</span>
            </div>
        </div>

      </main>
    </div>
  );
}
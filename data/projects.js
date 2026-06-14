export const PROJECTS_DATA = [
  {
    id: "agentic-healthcare",
    title: "Agentic Healthcare Analytics",
    date: "Jan 2026 - Apr 2026",
    categories: ["AI & Machine Learning", "Data Analytics"],
    shortDesc: "A multi-agent workflow that translates natural-language healthcare questions into auditable structured-data analysis using LangGraph and DuckDB.",
    
    starContent: {
      situation: "Clinical experts often face significant delays when trying to validate medical hypotheses because they rely heavily on specialized data engineers to query and extract information from complex, highly-regulated healthcare databases.",
      task: "The objective was to bridge the gap between clinical expertise and data science by building an intelligent copilot that allows medical professionals to query complex datasets directly using natural language, without waiting for human intermediaries.",
      action: "Engineered a multi-agent AI workflow using LangGraph and DuckDB. The system uses ClinicalBERT and FAISS to ground medical terminology to actual database schemas, dynamically generating accurate SQL queries while enforcing strict Human-In-The-Loop (HITL) checkpoints.",
      result: "Created an auditable, transparent analytics assistant that empowers clinicians to rapidly explore health data. This drastically reduces the turnaround time for hypothesis testing while preserving data security and exposing the analytical path for clinical review."
    },

    image: "/projects/healthcare-agentic-cover.png", 
    technologies: ["LangGraph", "DuckDB", "ClinicalBERT", "SQL", "LLM Orchestration", "FAISS"]
  },
  {
    id: "judicial-analytics-legal-nlp",
    title: "Judicial Analytics & Legal NLP",
    date: "Jan 2026 - Apr 2026",
    categories: ["AI & Machine Learning", "Data Analytics"],
    shortDesc: "A comprehensive NLP pipeline designed to extract, process, and analyze complex legal documents while strictly controlling for data leakage.",
    
    starContent: {
      situation: "Standard text analytics models fail on legal texts due to dense terminology, rigid structures, and the high risk of 'data leakage'—where models artificially inflate performance by reading outcome clues hidden within the judgment.",
      task: "The objective was to architect a specialized Natural Language Processing (NLP) pipeline capable of accurately extracting, processing, and analyzing complex judicial rulings without relying on post-decision factual material.",
      action: "Developed a custom hierarchical architecture using PyTorch, LegalBERT, and XGBoost. Implemented rigorous data leakage controls, including temporal isolation and IRAC-inspired extraction, to strictly separate pre-decision facts from final judicial conclusions.",
      result: "Delivered a scalable, robust framework for data-driven legal analytics. By safely converting raw judgments into model-ready rows, the pipeline prevents artificial outcome inflation and brings greater empirical transparency to modern legal research."
    },

    technologies: ["LegalBERT", "PyTorch", "Pandas", "NLTK", "OpenAI"],
    image: "/projects/legal-nlp.png"
  },
  {
    id: "charity-dao",
    title: "Charity DAO: Decentralized Giving",
    date: "Aug 2025 – Dec 2025",
    sortDate: "2025-12", 
    categories: ["Blockchain & Web3", "Web Development"],
    shortDesc: "A decentralized charity platform utilizing quadratic voting and milestone-based disbursements to ensure transparent fund allocation.",
    
    starContent: {
      situation: "Trust in the traditional charity sector is declining due to prevalent scams, administrative bloat, and a fundamental lack of transparency regarding how donor funds are actually utilized by NGOs.",
      task: "The objective was to architect a trustless, decentralized platform to restore donor confidence by ensuring every contribution is mathematically traceable, immutable, and strictly bound to verifiable impact metrics.",
      action: "Developed a full-stack Decentralized Autonomous Organization (DAO) using Solidity and React. Implemented a milestone-based disbursement smart contract where NGOs must submit off-chain proof of work (anchored via IPFS) to unlock subsequent funding tranches, governed by a quadratic voting model.",
      result: "Successfully deployed a functional Web3 charity platform that mathematically prevents fund misappropriation. The system democratizes governance by protecting against 'whale' dominance and establishes verifiable on-chain accountability for all charitable activities."
    },

    image: "/projects/daov2.png",
    technologies: ["Solidity", "React", "Hardhat", "IPFS", "Smart Contracts"]
  },
  {
    id: "fair-tracker",
    title: "The Fair Tracker",
    date: "Jan 2025 – May 2025",
    sortDate: "2025-05", 
    categories: ["Web Development"],
    shortDesc: "A centralized platform empowering consumers to compare grocery prices across major Singaporean supermarket chains to combat food inflation.",
    
    starContent: {
      situation: "Rising living costs and global economic disruptions have driven up food inflation, making grocery shopping increasingly stressful for Singaporeans. Consumers lacked a transparent, centralized way to find the best prices across competing supermarket chains.",
      task: "As part of an application development coursework team, the objective was to build a full-stack, user-friendly web platform to empower budget-conscious students, families, and seniors to make smarter, cost-effective grocery purchasing decisions.",
      action: "Executed the project using Agile/Scrum methodology over two intensive sprints, implementing 24 core user stories. Built the platform using Vue.js and Firebase, integrating Google Maps API for store localization and VueChartkick to visualize historical price fluctuations.",
      result: "Delivered a comprehensive application featuring real-time price comparisons across major chains (e.g., NTUC, Sheng Siong), personalized smart grocery lists, and automated price-drop alerts, fostering a transparent and community-driven shopping experience."
    },

    image: "/projects/fair_tracker.jpg", 
    technologies: ["Vue.js", "Firebase", "Google Maps API", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "p2p-loan-default",
    title: "P2P Loan Default Prediction",
    date: "Jan 2025 – May 2025",
    sortDate: "2025-05", 
    categories: ["AI & Machine Learning", "Data Analytics", "FinTech"],
    shortDesc: "Built an end-to-end Big Data ML pipeline using PySpark to process 1.7GB of loan records, achieving an 82% recall rate in predicting credit defaults.",
    
    starContent: {
      situation: "Peer-to-peer (P2P) lending platforms face significant financial exposure from borrower defaults. As transaction volumes grow, traditional credit scoring models struggle to process massive datasets and often fail to capture complex risk patterns in highly imbalanced data.",
      task: "The objective was to architect a highly scalable Big Data machine learning pipeline capable of ingesting and analyzing 1.7GB of historical loan records to accurately predict and flag high-risk borrowers before loan approval.",
      action: "Engineered a distributed data processing pipeline using PySpark for large-scale feature extraction and data cleaning. Addressed the severe class imbalance of default records using resampling techniques (Imbalanced-learn), and trained robust classification models using Python and Scikit-learn.",
      result: "Successfully developed a predictive model achieving an 82% recall rate for credit defaults. By successfully flagging the vast majority of high-risk loans for manual review, the model drastically minimizes potential capital loss and improves the platform's risk-adjusted returns."
    },

    image: "/projects/LC.png", 
    technologies: ["Python", "PySpark", "Scikit-learn", "Imbalanced-learn", "Big Data"]
  },
  {
    id: "community-mart",
    title: "Community Mart App",
    date: "Jan 2025",
    categories: ["Web Development", "AI & Machine Learning"],
    shortDesc: "A digital mini-mart empowering residents to purchase goods using a voucher system, featuring an AI chatbot and live auctions.",
    
    starContent: {
      situation: "Community organizations relied on manual, paper-based tracking for the distribution of essential goods. This outdated approach was highly inefficient, difficult for administrators to manage, and created friction for residents trying to access daily necessities.",
      task: "Participating in Hack 4 Good 2025, our team of five was tasked with modernizing this distribution process. The goal was to design a centralized digital mini-mart that bridged the gap between modern technology and accessible community service.",
      action: "Developed a full-stack application featuring a digital voucher point system that empowered residents to easily purchase and preorder necessities. We prioritized a seamless, accessible frontend UX for residents—including an AI chatbot (Botpress) for instant support—while building robust backend tracking tools for administrators.",
      result: "Successfully replaced manual tracking with a streamlined digital ecosystem. The platform eliminated administrative bottlenecks and provided residents with a dignified, modernized, and highly accessible way to utilize their community vouchers."
    },

    image: "/projects/hack4good_2025.jpg", 
    technologies: ["Vue.js", "Firebase", "Botpress", "Node.js"] 
  },
  {
    id: "beijing-house-market", 
    title: "Beijing House Market Analysis",
    date: "Mar 2024 – Apr 2024",
    categories: ["Data Analytics"],
    shortDesc: "Analyzed Beijing housing data (2011–2017) to provide actionable business insights regarding market risks and investment viability.",
    
    starContent: {
      situation: "A large real estate organization was considering venturing into the highly speculative Beijing property market. However, the market was experiencing extreme volatility amid fears of an asset bubble and new government cooling measures.",
      task: "Acted as the lead data analytics unit tasked with processing a massive dataset of Beijing housing transactions (2011–2017). The objective was to extract actionable business insights, evaluate market risks, and provide data-driven investment recommendations to senior management.",
      action: "Executed end-to-end data cleaning and imputation on hundreds of thousands of records (handling missing Days on Market data and categorizing variables). Developed interactive dashboards using Tableau and Power BI to analyze price fluctuations, spatial trends, government policy impacts, and developer liabilities.",
      result: "Uncovered critical indicators of a housing bubble driven by speculative buying. Advised management to avoid direct property investments due to macroeconomic risks of developer defaults, recommending a strategic pivot toward the rental market instead."
    },
    
    image: "/projects/beijing.jpg",
    technologies: ["Tableau", "Power BI", "Data Cleaning", "Exploratory Data Analysis"],
    link: null 
  }
];
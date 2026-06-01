// data/projects.js

export const PROJECTS_DATA = [
  {
    id: "beijing-house-market", 
    title: "Beijing House Market Analysis",
    date: "Mar 2024 – Apr 2024",
    categories: ["Data Analytics"],
    shortDesc: "Analyzed Beijing housing data (2011–2017) to provide actionable business insights regarding market risks and investment viability.",
    fullDesc: `Acted as the data analytics unit for a large real estate organization looking to venture into the Beijing property market. The goal was to analyze a dataset of Beijing housing prices (2011–2017) to provide actionable business insights and recommendations to management.
    
    Concluded there were possible high risks in investing in the Beijing properties, due to the bubble, if developers default, no new houses will be constructed, resulting in substantial job losses in real estate, impacting China’s GDP. Investors should avoid at the time being and consider the rental market instead.
    
    Note: This analysis is an academic project created for educational purposes only. It does not constitute financial advice.`,
    image: "/projects/beijing.jpg",
    technologies: ["Tableau", "Power BI"],
    link: null 
  },
  {
    id: "community-mart",
    title: "Community Mart App",
    date: "Jan 2025",
    categories: ["Web Development", "AI & Machine Learning"],
    shortDesc: "A digital mini-mart empowering residents to purchase goods using a voucher system, featuring an AI chatbot and live auctions.",
    image: "/projects/hack4good_2025.jpg", 
    technologies: ["Vue.js", "Firebase", "Botpress", "Node.js"] // Moved Botpress here
  },
  {
    id: "fair-tracker",
    title: "The Fair Tracker",
    date: "Jan 2025 – May 2025",
    sortDate: "2025-05", 
    categories: ["Web Development"],
    shortDesc: "A centralized platform empowering consumers to compare grocery prices across major Singaporean supermarket chains to combat food inflation.",
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
    image: "/projects/LC.png", 
    technologies: ["Python", "PySpark", "Scikit-learn", "Imbalanced-learn"]
  },
  {
    id: "charity-dao",
    title: "Charity DAO: Decentralized Giving",
    date: "Aug 2025 – Dec 2025",
    sortDate: "2025-12", 
    categories: ["Blockchain & Web3", "Web Development"],
    shortDesc: "A decentralized charity platform utilizing quadratic voting and milestone-based disbursements to ensure transparent fund allocation.",
    image: "/projects/daov2.png",
    technologies: ["Solidity", "React", "Hardhat", "IPFS", "Smart Contracts"] // Moved Smart Contracts to tech
  },
  {
    id: "agentic-healthcare",
    title: "Agentic Healthcare Analytics",
    date: "Jan 2026 - Apr 2026",
    categories: ["AI & Machine Learning", "Data Analytics"],
    shortDesc: "A multi-agent workflow that translates natural-language healthcare questions into auditable structured-data analysis using LangGraph and DuckDB.",
    image: "/projects/healthcare-agentic-cover.jpg", 
    technologies: ["LangGraph", "DuckDB", "ClinicalBERT", "SQL", "LLM Orchestration"] // Moved LLM to tech
  },
  {
    id: "judicial-analytics-legal-nlp",
    title: "Judicial Analytics & Legal NLP",
    date: "Jan 2026 - Apr 2026",
    categories: ["AI & Machine Learning", "Data Analytics"],
    technologies: ["Python", "LegalBERT", "PyTorch", "Pandas", "NLTK"],
    image: "/projects/legal-nlp.jpg", 
    shortDesc: `This project introduces a comprehensive Natural Language Processing (NLP) pipeline designed to extract, process, and analyze complex legal documents and judicial rulings. Unlike standard text analytics, legal text requires highly specialized tokenization and entity recognition due to its dense terminology and rigid structure. The core engine utilizes fine-tuned Transformer models to perform named entity recognition (NER), outcome prediction, and sentiment classification across vast datasets of court cases.
    
    By bridging the gap between computational linguistics and the judicial system, this research provides a highly scalable framework for data-driven legal analytics, ultimately bringing greater transparency and efficiency to modern legal research.`
  }
];
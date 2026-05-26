// data/projects.js

export const PROJECTS_DATA = [
  {
    // Using a string ID creates a clean, readable URL
    id: "beijing-house-market", 
    title: "Beijing House Market Analysis",
    date: "Mar 2024 – Apr 2024",
    categories: ["Data Visualization", "Market Analysis"],
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
    categories: ["Hackathon","AI", "Chatbot"],
    shortDesc: "A digital mini-mart empowering residents to purchase goods using a voucher system, featuring an AI chatbot and live auctions.",
    image: "/projects/hack4good_2025.jpg", 
    technologies: ["Vue.js", "Firebase", "Botpress"]
  },
  {
    id: "fair-tracker",
    title: "The Fair Tracker",
    date: "Jan 2025 – May 2025",
    sortDate: "2025-05", 
    categories: ["Web Development", "Agile/Scrum", "Vue.js"],
    shortDesc: "A centralized platform empowering consumers to compare grocery prices across major Singaporean supermarket chains to combat food inflation.",
    image: "/projects/fair_tracker.jpg", 
    technologies: ["Vue.js", "Firebase", "Google Maps API", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "p2p-loan-default",
    title: "P2P Loan Default Prediction",
    date: "Jan 2025 – May 2025",
    sortDate: "2025-05", 
    categories: ["Machine Learning", "Big Data", "FinTech", "Risk Management"],
    shortDesc: "Built an end-to-end Big Data ML pipeline using PySpark to process 1.7GB of loan records, achieving an 82% recall rate in predicting credit defaults.",
    image: "/projects/LC.png", 
    technologies: ["Python", "PySpark", "Scikit-learn", "Imbalanced-learn"]
  },
  {
    id: "charity-dao",
    title: "Charity DAO: Decentralized Giving",
    date: "Aug 2025 – Dec 2025",
    sortDate: "2025-12", 
    categories: ["Blockchain", "Web3", "DAO", "Smart Contracts"],
    shortDesc: "A decentralized charity platform utilizing quadratic voting and milestone-based disbursements to ensure transparent fund allocation.",
    image: "/projects/daov2.png",
    technologies: ["Solidity", "React", "Hardhat", "IPFS"]
  }
];
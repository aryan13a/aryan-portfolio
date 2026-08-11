export interface ProjectStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  fullDescription: string[];
  techStack: string[];
  stats: ProjectStat[];
  insights: string[];
  tableauUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: number; iconName?: string; highlight?: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Cloud' | 'Data Analytics' | 'BI & Viz' | 'Foundations';
  date: string;
  badgeColor: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Aryan Kumawat",
    title: "Data Analyst",
    tagline: "Translating Complex Datasets into Strategic Executive Decisions",
    email: "aryankumawat13@gmail.com",
    phone: "+91 97994 52775",
    location: "Jaipur, Rajasthan, India",
    availability: "Available for Full-time Roles & Projects",
    links: {
      github: "https://github.com/aryan13a",
      linkedin: "https://linkedin.com/in/aryankumawat13",
      tableau: "https://public.tableau.com",
    },
    heroSummary:
      "BSc graduate (Physics, Mathematics & Economics) with a Google Data Analytics Professional Certificate and hands-on experience building end-to-end analytics pipelines. Proficient in Python (pandas, NumPy), SQL/BigQuery, Tableau, and Power BI. Combines strong quantitative reasoning with business acumen to surface insights that drive decisions.",
    aboutExpanded: [
      "I am a Data Analyst with a rigorous quantitative foundation bridging Physics, Mathematics, and Economics from St. Xavier's College, Jaipur. My approach to analytics centers on extracting empirical truth from raw, noisy operational data.",
      "Equipped with the Google Data Analytics Professional Certificate, Anthropic AI Fluency credentials, and hands-on Deloitte simulation experience, I specialize in end-to-end analytics workflows: from raw data ingestion and BigQuery SQL cohort modeling to interactive Tableau executive dashboards.",
      "Whether analyzing retail sales margin compression or pin-pointing high-risk customer churn cohorts in commercial banking, I combine analytical rigor with sharp storytelling to help leadership turn data into high-ROI action."
    ],
    quickStats: [
      { label: "Rows Processed in ETL", value: "9,994+", prefix: "", suffix: "" },
      { label: "Revenue Uncovered", value: "$2.29M", prefix: "", suffix: "" },
      { label: "Banking Churn Records", value: "10,000+", prefix: "", suffix: "" },
      { label: "Professional Certifications", value: "9+", prefix: "", suffix: "" }
    ]
  },

  skillsCategories: [
    {
      category: "Languages",
      description: "Core programming & querying languages for data manipulation and modeling",
      skills: [
        { name: "Python", level: 95, highlight: "Pandas, NumPy, Scripting" },
        { name: "SQL (BigQuery)", level: 92, highlight: "CTEs, Window Functions, Aggregations" },
        { name: "DAX", level: 85, highlight: "Calculated Measures, Data Modeling" },
        { name: "R", level: 78, highlight: "Statistical Computation" }
      ]
    },
    {
      category: "BI & Visualization",
      description: "Executive dashboards, interactive reporting, and visual storytelling",
      skills: [
        { name: "Tableau Public", level: 95, highlight: "5-View Executive Dashboards, Actions" },
        { name: "Power BI", level: 90, highlight: "Interactive Reports, DAX Measures" },
        { name: "Looker Studio", level: 85, highlight: "Real-time KPI Tracking" }
      ]
    },
    {
      category: "Libraries & Data Wrangling",
      description: "Data processing, statistical computation, and plotting toolkits",
      skills: [
        { name: "Pandas", level: 95, highlight: "ETL, Cleaning, Feature Engineering" },
        { name: "NumPy", level: 90, highlight: "Array Operations, Matrix Math" },
        { name: "Matplotlib", level: 88, highlight: "Custom Charts & Distributions" },
        { name: "Seaborn", level: 88, highlight: "Statistical & Heatmap Viz" },
        { name: "Scikit-learn", level: 80, highlight: "Segmentation & Basic ML" }
      ]
    },
    {
      category: "Tools & Environment",
      description: "Development environments, spreadsheets, and version control",
      skills: [
        { name: "Jupyter", level: 95, highlight: "Exploratory Data Analysis" },
        { name: "Excel", level: 92, highlight: "Pivot Tables, VLOOKUP, Modeling" },
        { name: "Google Sheets", level: 90, highlight: "Formulae & Data Formatting" },
        { name: "Git & GitHub", level: 88, highlight: "Version Control & Documentation" }
      ]
    },
    {
      category: "AI & Cloud Technologies",
      description: "Next-generation GenAI analytics, prompt engineering, and cloud platforms",
      skills: [
        { name: "Generative AI", level: 92, highlight: "LLM-assisted Analytics" },
        { name: "Prompt Engineering", level: 94, highlight: "Structured Reasoning & Code Gen" },
        { name: "Claude AI / Claude Code", level: 90, highlight: "Workflow Automation" },
        { name: "Vertex AI & Gemini API", level: 86, highlight: "Google Cloud AI" },
        { name: "Oracle Cloud (OCI)", level: 82, highlight: "Foundations Certified" },
        { name: "Hugging Face", level: 80, highlight: "AI Fundamentals" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "superstore-sales",
      title: "Superstore Sales Performance Dashboard",
      period: "Mar 2026",
      role: "Lead Data Analyst",
      summary: "End-to-end retail transaction ETL pipeline and interactive 5-KPI executive Tableau dashboard analyzing $2.29M in total sales.",
      fullDescription: [
        "Built a complete data analytics pipeline starting from raw transactional data ingestion (9,994 rows) to executive dashboard delivery.",
        "Performed data cleaning, null handling, datetime feature extraction, and margin calculation using Python (Pandas, NumPy).",
        "Conducted exploratory data analysis (EDA) with Seaborn & Matplotlib to evaluate category profitability, discount impacts, and regional growth.",
        "Published a multi-tab Tableau Public dashboard featuring interactive filter controls, regional maps, and product profitability matrices."
      ],
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tableau Public"],
      stats: [
        { label: "Total Revenue Analyzed", value: "$2.29M", subtext: "Across 9,994 retail records" },
        { label: "Profit Margin", value: "12.47%", subtext: "Average across categories" },
        { label: "Tech Category Revenue", value: "36%", subtext: "Top grossing sector" },
        { label: "Top Region", value: "West", subtext: "Highest sales & profitability" }
      ],
      insights: [
        "Technology category drove 36% ($836K) of overall sales with the highest profit margin.",
        "West region led all US territories in both cumulative revenue and net profitability.",
        "High discount rates (>20%) on Furniture severely diluted margins despite high transaction volume.",
        "Calculated 5 core executive KPIs to streamline weekly regional sales reviews."
      ],
      tableauUrl: "https://public.tableau.com",
      githubUrl: "https://github.com/aryan13a",
      featured: true
    },
    {
      id: "bank-churn",
      title: "Bank Customer Churn Analysis",
      period: "Mar 2026",
      role: "Data Analyst & SQL Specialist",
      summary: "Cohort segmentation and churn risk modeling across 10,000+ banking records using BigQuery SQL and Tableau.",
      fullDescription: [
        "Executed end-to-end churn analysis on a commercial banking dataset of over 10,000 customer records to identify flight risk indicators.",
        "Utilized Google BigQuery SQL for complex queries, CTEs, age binning, account balance categorizations, and multi-variable cohort aggregations.",
        "Transferred cleaned SQL outputs to Google Sheets and Tableau Public to construct a 4-view executive dashboard detailing high-value customer exit risks.",
        "Identified critical actionable drivers: geographic disparity, age segment vulnerabilities, and product-overload churn spikes."
      ],
      techStack: ["Google Sheets", "BigQuery SQL", "Tableau Public", "Cohort Analysis"],
      stats: [
        { label: "Germany Churn Rate", value: "32.44%", subtext: "vs 16.15% France / 16.67% Spain" },
        { label: "Highest Risk Age Segment", value: "51.12%", subtext: "46–60 age group churn" },
        { label: "Churned Customer Balances", value: "$91K vs $73K", subtext: "25% higher balance among churners" },
        { label: "3–4 Product Churn Rate", value: "82–100%", subtext: "Severe risk in multi-product holders" }
      ],
      insights: [
        "German customer churn (32.44%) is double that of France and Spain, requiring localized retention interventions.",
        "Customers aged 46–60 demonstrated the highest attrition risk at 51.12%, suggesting retirement or competitive wealth transfer.",
        "Churned customers maintained 25% higher average balances ($91K vs $73K), making churn disproportionately costly to bank liquidity.",
        "Holding 3 or 4 products resulted in an alarming 82–100% churn rate, pointing to product fatigue or fee complexity."
      ],
      tableauUrl: "https://public.tableau.com",
      githubUrl: "https://github.com/aryan13a",
      featured: true
    }
  ] as Project[],

  experience: [
    {
      id: "deloitte-simulation",
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia (via Forage)",
      location: "Remote / Australia",
      period: "2024",
      type: "Virtual Experience",
      description: [
        "Executed forensic technology analysis and data wrangling on complex enterprise datasets.",
        "Developed interactive Tableau dashboards to visually communicate key data insights to client stakeholders.",
        "Formulated data-driven business conclusions in Excel, delivering clear strategic recommendations for decision-makers."
      ],
      skills: ["Forensic Data Analysis", "Tableau Dashboarding", "Excel Business Modeling", "Data Storytelling"]
    },
    {
      id: "nexgen-hires",
      role: "HR Intern (Technical Recruitment)",
      company: "NexGen Hires",
      location: "Jaipur, India",
      period: "Jul 2025 – Sep 2025",
      type: "Internship",
      description: [
        "Spearheaded candidate sourcing and screening for specialized software engineering and data roles.",
        "Managed recruitment databases, streamlining applicant tracking pipelines and data integrity.",
        "Analyzed recruitment funnel metrics to improve candidate response rates and shortlisting speed."
      ],
      skills: ["Data Management", "Technical Sourcing", "Database Operations", "Recruitment Analytics"]
    },
    {
      id: "vimerse-infotech",
      role: "HR Intern (Technical Recruitment)",
      company: "Vimerse Infotech",
      location: "Jaipur, India",
      period: "Sep 2024 – Oct 2024",
      type: "Internship",
      description: [
        "Executed end-to-end candidate sourcing, job description design, and initial technical screening interviews.",
        "Engineered weekly recruitment performance reports to track time-to-hire and channel conversion rates.",
        "Maintained candidate talent pipelines across multiple engineering domains."
      ],
      skills: ["Candidate Sourcing", "Job Description Design", "Recruitment Reporting", "Funnel Tracking"]
    }
  ] as Experience[],

  education: {
    degree: "Bachelor of Science (BSc)",
    field: "Physics, Mathematics & Economics",
    institution: "St. Xavier's College",
    location: "Jaipur, Rajasthan",
    period: "2022 – 2025",
    coursework: [
      "Statistical Methods",
      "Mathematical Economics",
      "Data Interpretation",
      "Research Methodology",
      "Econometrics Basics",
      "Linear Algebra & Calculus"
    ],
    highlights: [
      "Awarded Medal for Leadership & Organisational Skills by College Management.",
      "Event Coordinator for XSI-Tech Annual Science Fest (2 consecutive years).",
      "Presented research paper at National Symposium on 'Envisaging Vikisit Bharat @ 2024'."
    ]
  } as Education,

  certifications: [
    {
      id: "claude-101",
      title: "Claude 101",
      issuer: "Anthropic",
      category: "AI & Cloud",
      date: "2026",
      badgeColor: "from-amber-500 to-orange-600",
      credentialUrl: "https://verify.skilljar.com/c/nueprtsx3dc8"
    },
    {
      id: "claude-code-101",
      title: "Claude Code 101",
      issuer: "Anthropic",
      category: "AI & Cloud",
      date: "2026",
      badgeColor: "from-amber-500 to-orange-600",
      credentialUrl: "https://verify.skilljar.com/c/vwmrjk7aonjr"
    },
    {
      id: "ai-fluency",
      title: "AI Fluency",
      issuer: "Anthropic",
      category: "AI & Cloud",
      date: "2026",
      badgeColor: "from-amber-500 to-orange-600",
      credentialUrl: "https://verify.skilljar.com/c/tk2owvff4ywv"
    },
    {
      id: "google-data-analytics",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      category: "Data Analytics",
      date: "2025",
      badgeColor: "from-blue-500 to-cyan-500",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/NZN0BBYGWM1R"
    },
    {
      id: "huggingface-ai",
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      category: "AI & Cloud",
      date: "2026",
      badgeColor: "from-yellow-400 to-amber-500",
      credentialUrl: "https://us.aws.cdn.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/53741d5c96e80e34d49213c2b5b7ced7935c2e2d8076ad84bdf4c180a473ef39?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272026-05-18.png%3B+filename%3D%222026-05-18.png%22%3B&X-Xet-Cas-Uid=6a0ad2e74baffe9f632832b4&user_id=6a0ad2e74baffe9f632832b4&response-content-type=image%2Fpng&Expires=1786440164&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly91cy5hd3MuY2RuLmhmLmNvL3hldC1icmlkZ2UtdXMvNjdhNDcwMzc3NDllYTJjNGI5ZmFmZDRiLzUzNzQxZDVjOTZlODBlMzRkNDkyMTNjMmI1YjdjZWQ3OTM1YzJlMmQ4MDc2YWQ4NGJkZjRjMTgwYTQ3M2VmMzlcXD9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPWlubGluZSUzQitmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3MjAyNi0wNS0xOC5wbmclM0IrZmlsZW5hbWUlM0QlMjIyMDI2LTA1LTE4LnBuZyUyMiUzQiZYLVhldC1DYXMtVWlkPTZhMGFkMmU3NGJhZmZlOWY2MzI4MzJiNCZ1c2VyX2lkPTZhMGFkMmU3NGJhZmZlOWY2MzI4MzJiNCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkVwb2NoVGltZSI6MTc4NjQ0MDE2NH19fV19&Signature=MEQCIF3-gOnRRVM38SM7iFMzTnLc2eb0MB09QE0u2eXwo4pOAiBBaQPmQwCBKuVLxuW-oJTeYbyMe3KuE0Ohk1z2xUWyng__&Key-Pair-Id=01KXEF4KZ1B6FV465MAWR4M21F"
    },
    {
      id: "oracle-oci",
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      category: "AI & Cloud",
      date: "2025",
      badgeColor: "from-red-500 to-rose-600",
      credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FB80C2E98D73AF879B4807C7D3AE0C724D63ADC44B2810A1DEACD7B4795DD8EB"
    },
    {
      id: "ibm-python",
      title: "Python for Data Science",
      issuer: "IBM",
      category: "Data Analytics",
      date: "2025",
      badgeColor: "from-blue-600 to-indigo-600",
      credentialUrl: "https://www.credly.com/badges/542fd80c-48cd-4a86-b8fe-a519891e8ac5/linked_in_profile"
    },
    {
      id: "google-genai",
      title: "Gen AI Academy Graduate",
      issuer: "Google Cloud & Hack2skill",
      category: "AI & Cloud",
      date: "2025",
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "powerbi-ai",
      title: "AI Dashboard Development using Power BI",
      issuer: "Skill Nation / Microsoft",
      category: "BI & Viz",
      date: "2025",
      badgeColor: "from-amber-400 to-yellow-600"
    },
    {
      id: "deloitte-sim-cert",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      category: "Foundations",
      date: "2024",
      badgeColor: "from-green-600 to-emerald-700",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_HhZ8Z3qH9rooWfZHb_1749629216583_completion_certificate.pdf"
    },
    {
      id: "ms-genai",
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      category: "AI & Cloud",
      date: "2024",
      badgeColor: "from-cyan-600 to-blue-700"
    }
  ] as Certification[],

  achievements: [
    {
      id: "research-paper",
      title: "Research Paper Presenter",
      organization: "National Symposium on 'Envisaging Vikisit Bharat @ 2024'",
      description: "Presented research paper evaluating quantitative data frameworks and economic indicators for national growth models.",
      tag: "Research & Analytics"
    },
    {
      id: "leadership-medal",
      title: "Medal for Leadership & Organisational Skills",
      organization: "St. Xavier's College, Jaipur",
      description: "Honored with the institutional leadership medal for managing key academic forums and student initiatives.",
      tag: "Institutional Honor"
    },
    {
      id: "science-fest",
      title: "Event Coordinator — XSI-Tech Annual Science Fest",
      organization: "St. Xavier's College, Jaipur",
      description: "Led a team of 15+ volunteers for two consecutive years, managing event logistics, sponsor communications, and digital promotions.",
      tag: "Leadership & Management"
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship Training Initiative",
      organization: "Knowledge Transfer Programme",
      description: "Participated and facilitated peer workshops on analytical problem solving, data modeling, and venture feasibility.",
      tag: "Workshop & Mentorship"
    }
  ] as Achievement[]
};

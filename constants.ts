
import { Experience, Education, SkillGroup, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Greeshma B",
  title: "Junior AI/ML Engineer",
  subTitle: "Senior Data Engineer | Cloud Architect | GenAI Enthusiast",
  location: "Chicago, IL (Willing to Relocate)",
  email: "greeshmab245@gmail.com",
  phone: "203-747-5280",
  linkedin: "linkedin.com/in/greeshma-reddy",
  summary: "Junior AI/ML Engineer with strong experience in Python, SQL, Azure, and end-to-end data and machine learning workflows. Skilled in building, deploying, and maintaining AI/ML models, automating pipelines, and working with cloud platforms including Microsoft Azure, AWS, Databricks, and Snowflake. Hands-on experience applying Generative AI, LLMs, RAG concepts, and vector search to real-world business problems."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "jpmc",
    company: "JPMorgan Chase",
    location: "Chicago, IL",
    role: "Senior Data Engineer",
    period: "Dec 2024 – Present",
    highlights: [
      "Supported AI-driven financial analytics by preparing large datasets for ML pipelines.",
      "Built scalable PySpark workflows on Databricks for internal AI model preprocessing.",
      "Fed real-time streaming data into ML scoring environments.",
      "Automated ingestion from AWS S3 to Snowflake, improving data refresh performance by 40%.",
      "Lead participant in Agile ceremonies and high-quality deployment debugging."
    ]
  },
  {
    id: "uselectronics",
    company: "US Electronics, Inc.",
    location: "Minneapolis, MN",
    role: "Senior Data Engineer",
    period: "Jan 2023 – Nov 2024",
    highlights: [
      "Designed ETL pipelines in Python/PySpark for AI workloads.",
      "Migrated on-prem pipelines to Azure Data Factory, lowering operational costs.",
      "Built CI/CD pipelines for ML workflows using Git + Jenkins.",
      "Integrated REST APIs consumed by downstream analytics and AI teams.",
      "Collaborated with ML engineers for standardized predictive modeling datasets."
    ]
  },
  {
    id: "vanguard",
    company: "Vanguard",
    location: "Philadelphia, PA",
    role: "Data Analyst / Data Engineer",
    period: "Jan 2021 – Dec 2022",
    highlights: [
      "Transformed unstructured datasets for ML readiness using Python/SQL.",
      "Automated data quality processes ensuring high-quality model training input.",
      "Built Tableau dashboards for trend forecasting and predictive analytics.",
      "Partnered with data scientists to define KPIs and feature creation datasets."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI / Machine Learning",
    skills: ["Generative AI", "LLMs", "RAG", "LangChain", "Vector Databases", "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"]
  },
  {
    category: "Cloud Platforms",
    skills: ["Azure (ADF, Functions, ML)", "AWS (S3, Lambda, EC2)", "Snowflake", "Databricks"]
  },
  {
    category: "MLOps & Engineering",
    skills: ["CI/CD", "GitHub Actions", "Docker", "PySpark", "SQL", "ETL Pipelines", "Airflow"]
  },
  {
    category: "Tools & Analytics",
    skills: ["Jupyter", "VS Code", "Git", "Postman", "Tableau", "Power BI"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of New Haven",
    location: "West Haven, CT"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Veltech University",
    location: "Chennai, India"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft" },
  { name: "Generative AI & Prompt Engineering", issuer: "Freedom With AI" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" }
];

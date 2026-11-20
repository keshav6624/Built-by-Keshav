import type { Project } from '@/lib/content-types';
import { projectImages } from './assets';

export const projectCatalog = [
  {
    id: 'phish-guard',
    title: 'Phish Gaurd',
    image: projectImages.phishGuard,
    shortDescription: 'An AI security system that audits suspicious URLs and phishing emails in real time.',
    problem: 'Most users still rely on instinct to judge suspicious URLs and emails.',
    description: 'A phishing investigation dashboard using DNS, SSL, keyword detection, and Gemini-powered reasoning.',
    stack: ['Node.js', 'Express', 'Vanilla JS', 'Gemini API', 'DNS', 'SSL'],
    metric: 'Explainable phishing risk indicators',
    businessImpact: 'Shows the evidence behind each phishing-risk result.',
    showItems: ['Live demo', 'Risk score', 'Indicator breakdown', 'AI explanation'],
    tags: ['Security AI', 'Full-Stack', 'Threat Detection'],
    featured: true,
    date: 'Jul 2025',
    category: 'ai',
    github: 'https://github.com/keshav6624/Phish-Gaurd',
    content: `Overview\nPhish Gaurd is an AI-assisted security tool for investigating suspicious URLs and phishing emails. It combines deterministic checks with AI reasoning so users can understand why a message or link looks dangerous.\n\nWhat it does\n• Inspects DNS records, SSL certificates, HTTP headers, redirects, and suspicious URL patterns.\n• Extracts links from raw email text and scans them individually.\n• Scores risk using phishing keywords, infrastructure signals, and domain behavior.\n• Produces a plain-English forensic explanation through Gemini.\n\nDesign goal\nI wanted each verdict to be inspectable, so the result shows the signals behind the risk score instead of stopping at a safe/unsafe label.`,
  },
  {
    id: 'ai-driven-fraud-and-anomaly-detection-system',
    title: 'AI-Driven Fraud and Anomaly Detection System',
    image: projectImages.aiFraudAnomaly,
    shortDescription: 'MPLAD Sentinel uses anomaly detection, risk scoring, duplicate detection, and explainable ML to surface fraud indicators in public development data.',
    problem: 'Rule-only systems miss evolving fraud patterns.',
    description: 'A full-stack FastAPI and React platform for MPLADS analytics, combining unsupervised anomaly detection, composite risk scoring, duplicate detection, natural-language SQL, and explainable model outputs.',
    stack: ['FastAPI', 'React', 'TypeScript', 'Python', 'Isolation Forest', 'LOF'], metric: 'Fraud detection precision and recall', businessImpact: 'Gives investigators one place to review anomalies, duplicates, and risk factors.', showItems: ['Detection pipeline', 'Risk scoring', 'Duplicate detection', 'Explainability', 'Analytics dashboard'], tags: ['Fraud', 'AI', 'Risk'], featured: true, date: 'Aug 2026', category: 'ai', github: 'https://github.com/keshav6624/AI-Driven-Fraud-and-Anomaly-Detection-System', content: `Overview\nMPLAD Sentinel is a full-stack AI/ML platform for finding anomalies, fraud indicators, duplicate records, and spending inefficiencies in MPLADS data.\n\nKey capabilities\n• Combines robust Z-scores, Isolation Forest, and Local Outlier Factor detectors.\n• Produces a composite 0–100 risk score with component-level explanations.\n• Detects suspicious duplicates using TF-IDF and Jaccard similarity.\n• Includes a natural-language-to-SQL assistant for exploring project data.\n• Presents analytics, maps, investigations, and model output through a React dashboard.\n\nArchitecture\nFastAPI serves authenticated APIs and live inference, while the ML pipeline cleans data, engineers features, benchmarks peers, scores risk, and generates explanations.`
  },
  {
    id: 'ai-job-recommender',
    title: 'AI Job Recommender',
    image: projectImages.aiJobRecommender,
    shortDescription: 'Semantic job recommendations with resume parsing, skill-gap analysis, explainable matching, and tailored resume generation.',
    problem: 'Candidates struggle to find relevant roles among noisy listings.',
    description: 'A React and FastAPI job platform that combines hybrid TF-IDF and skill matching with resume parsing, skill-gap guidance, explainable recommendations, bookmarks, and DOCX tailoring.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'TF-IDF', 'Cohere'], metric: 'Recommendation relevance', businessImpact: 'Ranks roles against a resume and makes missing skills visible.', showItems: ['Resume parsing', 'Hybrid ranking', 'Skill-gap analysis', 'Explainable matches', 'DOCX tailoring'], tags: ['AI', 'Jobs', 'Recommendations'], featured: true, date: 'Jan 2026', category: 'ai', github: 'https://github.com/keshav6624/AI-Job-Recommender-', content: `Overview\nAI Job Recommender is a semantic job-matching platform that helps candidates find relevant roles and understand what they need to improve.\n\nKey capabilities\n• Parses uploaded resumes into a structured skill profile.\n• Combines TF-IDF similarity with explicit skill matching for recommendations.\n• Explains why a job matches and highlights missing or weaker skills.\n• Supports bookmarks, match events, and a bundled job dataset.\n• Generates tailored DOCX resume content for selected roles.\n\nProduct flow\nThe React frontend manages the candidate experience while the FastAPI backend handles parsing, ranking, analysis, explanations, persistence, and resume generation.`
  },
  {
    id: 'ai-powered-network-security-forecast-system',
    title: 'AI-Powered Network Security Forecast System',
    image: projectImages.networkSecurityForecast,
    shortDescription: 'NetGuard AI forecasts network attacks up to five minutes ahead using temporal models, anomaly detection, and risk scoring.',
    problem: 'Security teams need earlier signals of emerging network threats.',
    description: 'A network security forecasting system built around CSE-CIC-IDS2018 traffic, using Logistic Regression, XGBoost, LSTM, Transformer, and Isolation Forest models to generate early-warning alerts and SOC-style risk dashboards.',
    stack: ['Python', 'LSTM', 'Transformer', 'XGBoost', 'PostgreSQL'], metric: 'Threat forecast accuracy', businessImpact: 'Turns model forecasts into early-warning risk levels for analysts.', showItems: ['Temporal forecasting', 'Risk scoring', 'Early alerts', 'SOC dashboard', 'Model comparison'], tags: ['Cybersecurity', 'AI', 'Forecasting'], featured: true, date: 'Aug 2026', category: 'ai', github: 'https://github.com/keshav6624/AI-powered-network-security-forecast-system', content: `Overview\nNetGuard AI forecasts the probability of a future network attack instead of only detecting traffic that is already malicious.\n\nHow it works\nRecent network-flow windows are transformed into temporal sequences. Logistic Regression and XGBoost provide baselines, while LSTM and Transformer models learn time-dependent behavior. Isolation Forest adds anomaly signals.\n\nKey capabilities\n• Predicts attack probability for a future time window.\n• Converts predictions into 0–100 risk scores and LOW to CRITICAL severity levels.\n• Replays historical traffic and compares model behavior.\n• Sends early-warning alerts through a SOC-style dashboard.\n\nThe project is designed around the CSE-CIC-IDS2018 dataset with PostgreSQL and SQLite fallback support.`
  },
  {
    id: 'expense-categorizer-nlp',
    title: 'Expense Categorizer NLP',
    image: projectImages.expenseCategorizer,
    shortDescription: 'A Streamlit expense assistant that classifies transaction text with TF-IDF and balanced logistic regression, then stores reviewed results in SQLite.',
    problem: 'Raw transaction text is noisy and difficult to analyze.',
    description: 'A practical NLP workflow for cleaning transaction descriptions, training a text classifier, categorizing expenses, and persisting reviewed results with Streamlit, pandas, scikit-learn, spaCy, TextBlob, and SQLAlchemy.',
    stack: ['Python', 'Streamlit', 'pandas', 'scikit-learn', 'spaCy', 'SQLAlchemy'], metric: 'Classification accuracy and F1', businessImpact: 'Converts raw transaction text into reviewable spending categories.', showItems: ['Text preprocessing', 'TF-IDF model', 'Expense categories', 'SQLite review storage', 'Upload workflow'], tags: ['NLP', 'Fintech', 'Analytics'], featured: false, date: 'May 2025', category: 'ml', github: 'https://github.com/keshav6624/Expense-Categorizer-NLP-Based-Transaction-Classification-System', content: `Overview\nExpense Categorizer turns messy transaction descriptions into useful spending categories. It is built as a Streamlit workflow that supports training, classification, review, and persistence.\n\nKey capabilities\n• Cleans and extracts features from transaction text.\n• Uses TF-IDF with a balanced logistic-regression baseline.\n• Accepts example transaction uploads and stores reviewed results in SQLite.\n• Uses spaCy and TextBlob for language processing with a safe fallback when the English model is unavailable.\n\nReason for building it\nI wanted the classifier to end in a usable review loop rather than remain an offline notebook experiment.`
  },
  {
    id: 'fraud-detection-using-graph-neural-networks',
    title: 'Fraud Detection Using Graph Neural Networks',
    image: projectImages.gnnFraudDetection,
    shortDescription: 'A heterogeneous Graph Attention Network that finds fraud rings through shared cards, devices, emails, addresses, and transaction relationships.',
    problem: 'Tabular models miss relationship-level fraud patterns.',
    description: 'A PyTorch Geometric and Streamlit fraud system that transforms IEEE-CIS transaction tables into a heterogeneous graph and uses GAT-based multi-hop reasoning to detect coordinated fraud with explainability.',
    stack: ['Python', 'PyTorch Geometric', 'NetworkX', 'Streamlit', 'GAT'], metric: 'Fraud recall at fixed precision', businessImpact: 'Surfaces connected transactions that row-by-row models can miss.', showItems: ['Heterogeneous graph', 'GAT training', 'Multi-hop reasoning', 'Explainability', 'Threshold analysis'], tags: ['Fraud', 'Graph ML', 'GNN'], featured: true, date: 'Feb 2026', category: 'ml', github: 'https://github.com/keshav6624/FRAUD-DETECTION-USING-GRAPH-NEURAL-NETWORKS', content: `Overview\nThis project converts the IEEE-CIS fraud dataset into a heterogeneous graph and trains Graph Attention Networks to detect fraudulent transactions.\n\nCore idea\nFraudsters reuse cards, devices, email domains, addresses, and other entities. A graph exposes those relationships, allowing the model to reason across neighboring transactions and identify coordinated fraud rings that row-by-row models can miss.\n\nKey capabilities\n• Builds transaction, card, email, device, address, and relationship nodes.\n• Applies multi-hop attention over shared entities.\n• Compares graph models with traditional tabular baselines.\n• Provides case-level explainability and threshold analysis through Streamlit.`
  },
  {
    id: 'minimal-habit-tracker',
    title: 'Minimal Habit Tracker',
    image: projectImages.minimalHabitTracker,
    shortDescription: 'A privacy-conscious habit tracker with a React and TypeScript frontend, Spring Boot API, PostgreSQL support, analytics, and authentication.',
    problem: 'Habit tools can be overly complex for everyday use.',
    description: 'A full-stack habit tracking MVP with a Spring Boot backend, React and TypeScript frontend, PostgreSQL support, in-memory development mode, authentication, analytics, reminders settings, and tested REST APIs.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'H2'], metric: 'Habit completion consistency', businessImpact: 'Keeps habit logging and progress review in one focused workflow.', showItems: ['Habit dashboard', 'Authentication', 'Analytics', 'Reminders settings', 'REST API'], tags: ['Java', 'Productivity'], featured: false, date: 'Nov 2026', category: 'build', github: 'https://github.com/keshav6624/minimal-habit-tracker', content: `Overview\nMinimal Habit Tracker is a privacy-conscious full-stack habit application designed around a focused daily workflow.\n\nKey capabilities\n• Create and manage habits with completion tracking and analytics.\n• Uses a React and TypeScript frontend with a Spring Boot API.\n• Supports PostgreSQL in production and H2 for zero-setup development and tests.\n• Includes authentication, rate limiting, Flyway migrations, and documented REST APIs.\n• Keeps the interface intentionally minimal so progress is easy to review.\n\nProject quality\nThe repository documents backend and frontend checks, security decisions, API contracts, and known MVP limitations.`
  },
  {
    id: 'ml-based-credit-card-fraud-detection',
    title: 'ML-Based Credit Card Fraud Detection',
    image: projectImages.creditCardFraud,
    shortDescription: 'A Streamlit fraud command center for batch inference, single-transaction predictions, model comparison, validation, and artifact health checks.',
    problem: 'Financial fraud requires accurate detection under class imbalance.',
    description: 'An educational fraud analytics dashboard that loads Logistic Regression, neural-network, and K-Means artifacts to validate CSVs, explore transactions, compare models, and monitor inference health.',
    stack: ['Python', 'Streamlit', 'scikit-learn', 'Keras', 'K-Means'], metric: 'Fraud recall, precision, and F1', businessImpact: 'Makes saved fraud models testable through files and individual transactions.', showItems: ['Batch inference', 'Single prediction', 'Model comparison', 'CSV validation', 'Artifact health'], tags: ['Fraud', 'Fintech', 'ML'], featured: true, date: 'Apr 2025', category: 'ml', github: 'https://github.com/keshav6624/ml-based-credit-card-fraud-detection', content: `Overview\nFraud Detection Command Center is a Streamlit dashboard for exploring credit-card transactions and running saved fraud-detection models.\n\nKey capabilities\n• Runs batch predictions on uploaded transaction CSVs.\n• Supports single-transaction analysis from uploaded or manually entered data.\n• Compares supervised model metrics when labels are available.\n• Validates required columns, numeric values, labels, and non-finite inputs.\n• Processes large files in chunks while preserving row order.\n• Checks artifact hashes, runtime versions, model loading, and warnings.\n\nModels\nThe dashboard supports saved Logistic Regression, neural-network, and K-Means artifacts for classification, scoring, and clustering workflows.`
  },
  {
    id: 'rag-based-teaching-agent',
    title: 'RAG-Based Teaching Agent',
    image: projectImages.ragTeachingAgent,
    shortDescription: 'A retrieval-augmented teaching assistant that grounds AI answers in relevant learning material.',
    problem: 'Generic answers often lack grounding in course material.',
    description: 'A Python-based RAG teaching agent designed to retrieve relevant educational context before generating answers, improving grounding and usefulness for learning workflows.',
    stack: ['Python', 'RAG', 'LLMs', 'Vector Search'], metric: 'Answer relevance and groundedness', businessImpact: 'Answers questions with retrieved learning material included as context.', showItems: ['Knowledge ingestion', 'Document retrieval', 'Context injection', 'Grounded answers'], tags: ['RAG', 'Education', 'AI'], featured: true, date: 'Jan 2026', category: 'ai', github: 'https://github.com/keshav6624/RAG-based-teaching-agent', content: `Overview\nRAG-Based Teaching Agent is an educational AI assistant designed to answer questions using relevant learning material instead of relying only on a model's general memory.\n\nSelected capabilities\n• Ingests and organizes teaching resources.\n• Retrieves context relevant to a learner's question.\n• Injects that context into the generation step.\n• Produces more grounded explanations for study and revision.\n\nRetrieval choice\nThe retrieval step keeps answers tied to supplied learning material instead of relying entirely on the model's memory.`
  },
  {
    id: 'trackly',
    title: 'Trackly',
    image: projectImages.trackly,
    shortDescription: 'A placement-readiness dashboard that combines LeetCode and GitHub data into student scores, reports, alerts, and progress views.',
    problem: 'Progress becomes difficult to understand without a focused tracking workflow.',
    description: 'A full-stack Next.js and TypeScript dashboard for college placement teams, with MongoDB persistence, GitHub and LeetCode aggregation, cached student metrics, reports, filters, alerts, and graceful API fallbacks.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Mongoose'], metric: 'Tracking clarity and completion visibility', businessImpact: 'Brings GitHub and LeetCode activity into one placement-readiness view.', showItems: ['Student dashboard', 'LeetCode and GitHub aggregation', 'Reports', 'Alerts', 'Cached fallback data'], tags: ['TypeScript', 'Productivity'], featured: false, date: 'Dec 2025', category: 'build', github: 'https://github.com/keshav6624/Trackly', content: `Overview\nTrackly is a placement-readiness dashboard for college teams. It combines coding activity from LeetCode and GitHub into a single view of student progress.\n\nKey capabilities\n• Adds students with roll number, name, LeetCode username, and GitHub username.\n• Aggregates upstream activity and calculates derived readiness scores.\n• Includes search, status filters, summary cards, reports, alerts, and detail drawers.\n• Stores data with MongoDB and caches per-student API results for 30 minutes.\n• Falls back to cached data with a visible stale marker when an upstream API fails.\n\nDesign goal\nTrackly puts scattered coding activity in one view so mentors and students can inspect progress without switching between platforms.`
  },
  {
    id: 'university-exam-system',
    title: 'University Exam System',
    image: projectImages.universityExamSystem,
    shortDescription: 'A role-based university exam platform for admins, teachers, and students with course management, assessments, grading, analytics, and results.',
    problem: 'Exam administration requires reliable handling of students, assessments, and results.',
    description: 'A React, Node.js, Express, and PostgreSQL examination system with JWT authentication, role-based access, course and question management, exam attempts, grading, performance analytics, and deployed frontend support.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'], metric: 'Exam workflow reliability', businessImpact: 'Keeps course setup, exams, grading, and results in one role-based flow.', showItems: ['Role-based access', 'Course management', 'Exam creation', 'Grading', 'Analytics', 'Results portal'], tags: ['JavaScript', 'Education', 'Full-Stack'], featured: false, date: 'May 2025', category: 'build', github: 'https://github.com/keshav6624/University_Exam_System', content: `Overview\nUniversity Examination Management System is a role-based platform for administering university courses, exams, submissions, grading, and results.\n\nRoles and workflows\n• Admins manage departments, teachers, students, courses, uploads, logs, and analytics.\n• Teachers create courses and exams, manage questions, grade submissions, and publish results.\n• Students view enrolled courses, attempt exams, submit answers, and review performance.\n\nTechnical foundation\nThe frontend uses React, Vite, React Router, Axios, Tailwind CSS, Recharts, and Framer Motion. The backend uses Node.js, Express, PostgreSQL, JWT authentication, validation, and role-based middleware.\n\nDeployment\nThe project includes a live frontend deployment and a separate backend deployment workflow.`
  },
] satisfies Project[];

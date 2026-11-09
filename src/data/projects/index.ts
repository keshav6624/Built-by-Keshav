import type { Project } from '@/lib/content-types';

export const projects: Project[] = [
  {
    id: 'ads-revenue-campaign-measurement-platform',
    title: 'Ads Revenue & Campaign Measurement Platform',
    shortDescription: 'End-to-end ads measurement for spend, conversions, ROAS, and pacing.',
    problem: 'Ad decisions were being made with fragmented metrics and inconsistent attribution.',
    description: 'Built an end-to-end ads measurement platform to track campaign spend, impressions, conversions, ROAS, and pacing, enabling reliable revenue attribution and optimization decisions.',
    stack: ['Python', 'SQL', 'dbt', 'BigQuery', 'Looker'],
    metric: 'ROAS, CPA, spend pacing accuracy, campaign-level conversion lift',
    businessImpact: 'Enabled reliable campaign attribution and faster optimization cycles for revenue growth.',
    showItems: ['KPI layer', 'Attribution logic', 'Dashboard screenshots', 'Warehouse schema', 'Revenue drilldowns'],
    tags: ['Ads', 'Attribution', 'Data Warehouse', 'Analytics'],
    featured: true,
    date: 'Jan 2025',
    category: 'data',
    content: 'Built a campaign analytics layer with modeled spend and conversion facts, attribution windows, and pacing checks. Added drilldowns from executive ROAS to campaign and creative slices for actionability.',
    link: 'https://github.com/keshav-kumar06',
  },
  {
    id: 'experimentation-ab-metrics-layer',
    title: 'Experimentation & A/B Testing Metrics Layer',
    shortDescription: 'Treatment vs control analysis with lift, guardrails, and significance reporting.',
    problem: 'Product launches lacked trustworthy experiment readouts and consistent decision criteria.',
    description: 'Designed an experimentation metrics layer for treatment vs control analysis with lift calculation, confidence intervals, guardrail KPIs, and significance testing to support data-driven product launches.',
    stack: ['Python', 'SQL', 'Statsmodels', 'Airflow', 'BigQuery'],
    metric: 'Lift, confidence intervals, p-values, guardrail KPI stability',
    businessImpact: 'Increased confidence in launches with trustworthy product metrics at scale.',
    showItems: ['Experiment tables', 'CUPED / variance reduction', 'p-values', 'Auto decision reporting'],
    tags: ['Experimentation', 'A/B Testing', 'Statistics', 'Product Metrics'],
    featured: true,
    date: 'Feb 2025',
    category: 'data',
    content: 'Implemented reusable experiment data models and automated readouts with guardrails. Added CUPED-based variance reduction and standardized decision logic for launch/no-launch recommendations.',
  },
  {
    id: 'real-time-funnel-drop-monitoring-dashboard',
    title: 'Real-Time Funnel Drop Monitoring Dashboard',
    shortDescription: 'Monitoring request → fill → impression → click → conversion drops in real time.',
    problem: 'Revenue-impacting pipeline failures were being detected too late.',
    description: 'Built a real-time monitoring system for request → fill → impression → click → conversion funnels that detects CTR drops, geo/device anomalies, and late-arriving event issues.',
    stack: ['Kafka', 'Python', 'SQL', 'Grafana', 'Prometheus'],
    metric: 'Funnel stage health, anomaly alert precision, event lag SLA adherence',
    businessImpact: 'Prevents revenue loss from hidden pipeline failures by alerting teams early.',
    showItems: ['Anomaly alerts', 'SLA checks', 'Real-time charts', 'Event lag detection'],
    tags: ['Real-time', 'Monitoring', 'Funnel Analytics', 'Reliability'],
    featured: true,
    date: 'Mar 2025',
    category: 'dashboard',
    content: 'Instrumented funnel stage metrics with per-geo and per-device anomaly checks. Added late-event lag detection and alert routing to reduce detection-to-resolution time.',
  },
  {
    id: 'user-segmentation-ads-personalization',
    title: 'User Segmentation for Ads Personalization',
    shortDescription: 'Behavioral clustering and engagement segmentation for targeting and CTR lift.',
    problem: 'Ad targeting lacked meaningful behavioral cohorts, reducing campaign efficiency.',
    description: 'Built a user segmentation engine using behavioral clustering and engagement signals to improve ad targeting, cohort insights, and personalization strategies.',
    stack: ['Python', 'scikit-learn', 'SQL', 'Pandas', 'Plotly'],
    metric: 'Segment-level CTR lift and conversion lift',
    businessImpact: 'Improved personalization strategy quality and targeting effectiveness.',
    showItems: ['KMeans / DBSCAN', 'Cohort heatmaps', 'User personas', 'CTR uplift by segment'],
    tags: ['Segmentation', 'Personalization', 'ML', 'Ads'],
    featured: true,
    date: 'Apr 2025',
    category: 'ml',
    content: 'Generated robust behavioral segments and mapped them to campaign strategies. Delivered interpretable cohort insights and segment-level lift reporting for media teams.',
  },
  {
    id: 'privacy-chat-apk',
    title: 'Privacy Chat APK',
    shortDescription: 'Encrypted privacy-first chat app with secure key exchange and storage.',
    problem: 'Typical chat apps expose message and storage risks for privacy-sensitive users.',
    description: 'Developed an encrypted privacy-first chat Android app using modern cryptography for secure messaging, protected storage, and end-to-end message confidentiality.',
    stack: ['Kotlin', 'Android', 'AES', 'RSA', 'SQLite'],
    metric: 'End-to-end encrypted message success rate and secure storage coverage',
    businessImpact: 'Stands out as a memorable full-stack mobile + security product with real user value.',
    showItems: ['APK screenshots', 'Encryption workflow', 'AES / RSA usage', 'Key exchange', 'Secure local storage'],
    tags: ['Android', 'Security', 'Cryptography', 'Mobile'],
    featured: false,
    date: 'May 2025',
    category: 'build',
    content: 'Implemented encrypted transport and secure local storage with hybrid cryptography. Added key exchange flow and failure-safe messaging states for confidentiality.',
  },
  {
    id: 'job-recommender-pro',
    title: 'Job Recommender Pro',
    shortDescription: 'AI-powered job recommendations with explainable skill-based ranking.',
    problem: 'Candidates struggle to identify best-fit roles from noisy job listings.',
    description: 'Built an AI-powered job recommendation platform using resume parsing, semantic skill matching, and explainable ranking to improve candidate-job fit.',
    stack: ['Python', 'FastAPI', 'SentenceTransformers', 'PostgreSQL', 'React'],
    metric: 'Top-K recommendation precision',
    businessImpact: 'Improves candidate-job matching quality and platform engagement.',
    showItems: ['Embeddings', 'Similarity ranking', 'Resume upload flow', 'Explanation panel'],
    tags: ['Recommender Systems', 'NLP', 'AI', 'Search'],
    featured: true,
    date: 'Jun 2025',
    category: 'ai',
    content: 'Built semantic matching over resume/job vectors and explainable scoring by skills and experience alignment. Added Top-K evaluation and transparent recommendation rationale.',
  },
  {
    id: 'fraud-detection-using-graph-neural-network',
    title: 'FRAUD DETECTION USING GRAPH NEURAL NETWORK',
    shortDescription: 'Graph-based fraud detection over connected entities, transactions, and behavioral signals.',
    problem: 'Traditional tabular models miss relationship-level fraud patterns across users, devices, merchants, and transactions.',
    description: 'Built a graph neural network fraud detection pipeline that models entity relationships to identify collusive and multi-hop fraud patterns with higher precision than rule-only baselines.',
    stack: ['Python', 'PyTorch Geometric', 'NetworkX', 'Pandas', 'scikit-learn'],
    metric: 'Improved fraud recall at fixed precision and reduced false positives versus baseline classifiers',
    businessImpact: 'Helps risk teams block coordinated fraud rings earlier while reducing unnecessary manual reviews.',
    showItems: ['Graph construction pipeline', 'Node/edge feature engineering', 'GNN training workflow', 'Threshold analysis', 'Fraud case explainability notes'],
    tags: ['Fraud Detection', 'Graph ML', 'GNN', 'Risk Analytics', 'AI'],
    featured: true,
    date: 'Aug 2025',
    category: 'ml',
    content: 'Designed a fraud graph from accounts, devices, merchants, and transactions, then trained a graph neural network to capture neighborhood and multi-hop risk signals. Compared performance against tree-based baselines and tuned operating thresholds for high recall while controlling false positives in production-like evaluation.',
  },
  {
    id: 'phish-guard',
    title: 'Phish Guard',
    shortDescription: 'An AI security system that audits suspicious URLs and phishing emails in real time.',
    problem: 'Most users still rely on instinct to judge suspicious URLs and emails, which is risky and inconsistent.',
    description: 'Using DNS, SSL, keyword detection, and Gemini-powered forensic reasoning to detect phishing threats.',
    stack: ['Node.js', 'Express', 'Vanilla JS', 'Gemini API', 'DNS', 'SSL'],
    metric: 'Improved phishing catch quality through explainable risk indicators and URL/email signal extraction',
    businessImpact: 'Turns phishing detection into practical decision support with clear reasons, not just a binary warning.',
    showItems: ['Live demo', 'GitHub repo: phish-guard', 'Risk score + indicator breakdown', 'Gemini forensic explanation'],
    tags: ['Security AI', 'Full-Stack', 'Threat Detection', 'Cybersecurity'],
    featured: true,
    date: 'Jul 2025',
    category: 'ai',
    link: 'https://phish-guard.vercel.app',
    github: 'https://github.com/keshav-kumar06/phish-guard',
    content: `An AI security system that audits suspicious URLs and phishing emails in real time

Using DNS, SSL, keyword detection, and Gemini-powered forensic reasoning to detect phishing threats

link -> live demo
github -> phish-guard
stack -> Node.js, Express, Vanilla JS, Gemini API, DNS, SSL
focus -> Security AI / Full-Stack / Threat Detection

ok so what is this?

I built this because phishing attacks are getting smarter, and most people still rely on instinct to decide whether a URL or email is safe.

That felt risky.

So I wanted to build something that behaves like a mini AI security analyst:
you paste a suspicious link or email, and it performs a live forensic check.

The main question I wanted to answer was:

can a lightweight full-stack system explain why something looks malicious instead of just saying "unsafe"?

That's what became Phish Guard.

what i built

The whole system works like a simple security pipeline.

Input
suspicious URL
raw email text
extracted links from emails

Processing

The backend runs:

DNS lookup
SSL certificate validation
HTTP header inspection
phishing keyword detection
suspicious URL pattern checks
AI forensic explanation using Gemini

Output

The user gets:

risk score
suspicious indicators
extracted malicious patterns
plain-English AI explanation
safer decision support

So instead of just a red warning, it explains:

why this might be phishing

sanity check

Before trusting the AI explanation, I made sure the rule-based checks worked first.

For example:

expired SSL -> immediate risk increase
suspicious redirect chains -> flagged
common phishing words like urgent, verify, login now -> scored
hidden URLs inside emails -> extracted and rescanned

This helped keep the AI grounded in real signals instead of pure vibes.

evaluation

The strongest part of this project is explainability.

The system doesn't just classify threats.

It combines:

deterministic checks
infrastructure validation
AI reasoning

That makes the result easier for normal users to trust.

Biggest win:

suspicious emails with fake banking urgency language were consistently caught using keyword + extracted URL analysis.

what i learned

The biggest lesson was:

users trust explanations more than scores

A "90% malicious" label is useful.

But a breakdown like:

invalid SSL
suspicious domain age
urgent phishing language
hidden redirect link

makes the product feel far more real.

This shifted the project from a simple detector into a security decision-support tool.

conclusion

Not a replacement for enterprise email security tools, but a very strong AI-powered phishing investigation dashboard.

It shows:

backend security logic
live signal extraction
AI explanation workflows
product-oriented threat analysis

which makes it a great portfolio project for:

security AI
full-stack ML
trust & safety
fraud detection roles`,
  },
  {
    id: 'expense-categorizer',
    title: 'Expense Categorizer',
    shortDescription: 'NLP-driven transaction classification for budgeting intelligence.',
    problem: 'Raw transaction text was noisy and hard to use for accurate budgeting insights.',
    description: 'Built an intelligent expense categorization engine that automatically classifies transaction descriptions into spending buckets for budgeting and analytics.',
    stack: ['Python', 'scikit-learn', 'NLTK', 'Pandas', 'Streamlit'],
    metric: 'Classification accuracy and F1',
    businessImpact: 'Improves spending visibility and financial planning quality for users.',
    showItems: ['NLP pipeline', 'Text cleaning', 'Category confidence', 'Monthly insights dashboard'],
    tags: ['NLP', 'Classification', 'Fintech', 'Analytics'],
    featured: false,
    date: 'Aug 2025',
    category: 'ml',
    content: 'Built preprocessing and feature extraction for transaction descriptors, then trained and evaluated category classifiers with confidence scoring and monthly trend insights.',
  },
  {
    id: 'future-sales-prediction',
    title: 'Future Sales Prediction',
    shortDescription: 'Time-series forecasting for sales planning and inventory decisions.',
    problem: 'Teams lacked reliable forecasts for inventory and revenue planning windows.',
    description: 'Built a time-series forecasting system to predict future sales trends using seasonal patterns, trend decomposition, and model-based forecasting for better inventory planning.',
    stack: ['Python', 'Prophet', 'ARIMA', 'XGBoost', 'MLflow'],
    metric: 'MAPE and RMSE',
    businessImpact: 'Supports better planning decisions and reduces stock planning risk.',
    showItems: ['Prophet / ARIMA / XGBoost', 'Forecast intervals', 'Trend seasonality chart', 'Drift monitoring'],
    tags: ['Forecasting', 'Time Series', 'ML', 'Planning'],
    featured: false,
    date: 'Sep 2025',
    category: 'ml',
    content: 'Benchmarked classical and ML forecasting models, introduced interval forecasts, and tracked drift to trigger retraining. Improved forecast reliability for planning cycles.',
  },
  {
    id: 'carbon-footprint-estimator',
    title: 'Carbon Footprint Estimator',
    shortDescription: 'Lifestyle-to-emissions platform with personalized recommendations and reports.',
    problem: 'Users lacked a practical way to quantify and reduce personal emissions.',
    description: 'Built a user-facing carbon footprint estimation platform that converts lifestyle inputs into emissions insights, personalized reduction tips, and downloadable sustainability reports.',
    stack: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'PDFKit'],
    metric: 'Monthly emissions trend and recommendation adoption rate',
    businessImpact: 'Demonstrates product thinking with real-world utility and behavior change support.',
    showItems: ['Emissions calculator', 'PDF report', 'Recommendations engine', 'Monthly trend graph'],
    tags: ['Climate Tech', 'Product', 'Analytics', 'Full-stack'],
    featured: false,
    date: 'Oct 2025',
    category: 'build',
    content: 'Created a guided calculator that maps lifestyle signals to emissions factors, then generates personalized reduction actions and exportable monthly reports.',
  },
];

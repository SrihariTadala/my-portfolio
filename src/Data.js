const categories = [
	["All", "light"],
	["Web", "success"],
	["Python", "warning"],
	["HTML/CSS", "primary"],
	["Javascript", "danger"],
	// ["C/C++", "info"]
]

const workExperience = [

	{
        title: "Software Engineer ",
        company: "Portland State University",
        period: "Jan 2025 - Present",
    },
    {
        title: "Software Engineer",
        company: "Hindustan Petroleum Corporation Limited",
        period: "January 2022 - August 2023",
    },
	
   
];


const projects = [


		{
		"img": require('./img/projects/multimodal.jpg'),
		"title": "LearnLab Multimodal Learning Platform",
		"description": "Developed a LangGraph-based multi-agent learning platform that transforms educational PDFs into five interactive learning formats using OpenAI and Pinecone. Engineered an ETL pipeline with semantic chunking, reducing query latency by 86% and optimizing vector search with Upstash caching. Enabled real-time content delivery using FastAPI and Next.js, while maintaining 99.9% uptime and reducing API calls by 41%.",
		"techstack": "LangGraph, OpenAI, AWS/GCP, Pinecone, Next.js, FastAPI",
		"link": "https://github.com/SrihariTadala",
		// "category": "HTML/CSS"
	},


	{
  "img": require('./img/projects/llm_inference.jpg'),
  "title": "LLM Inference & Training System",
  "description": "Engineered a modular LLM training and inference framework implementing transformer architectures like LLaMA-2, Mistral, and DeepSeek-style MoE from scratch. Developed custom attention layers, normalization modules, dataloaders, and training loops with mixed-precision, FlashAttention, and model-level optimizations.",
  "techstack": "PyTorch, CUDA, DDP, FlashAttention, Python, YAML",
  "link": "https://github.com/SrihariTadala/LLM_Inference_System"
},


	{
  "img": require('./img/projects/careevents.jpg'),
  "title": "CareEvents AI Powered Elder Engagement",
  "description": "Built an intelligent event-planning platform for assisted-living homes that uses AI insights from resident conversations, preferences, and activity history to generate personalized activities. Implemented audio-based profiling with speech-to-text, preference extraction, and AI-generated summaries to help caregivers understand each elder’s unique background.",
  "techstack": "Next.js, FastAPI, OpenAI, Whisper, PostgreSQL, LangChain",
  "link": "https://github.com/SrihariTadala/Elderconnect"
},

	{
		"img": require('./img/projects/MERN.jpg'),
		"title": "CurrencyScope Stocks",
		"description": "Implemented a user-friendly financial dashboard using Flask and Bootstrap, offering real-time currency-adjusted stock prices and interactive features. Deployed on GCP with Docker for scalable and efficient hosting.",
		"techstack": "Tech Stack: Python, Flask, Javascript, AWS EC2, API.",
		"link": "https://github.com/SrihariTadala/CurrencyScope-Stocks",
		// "category": "HTML/CSS"
	},

	
{
  "img": require('./img/projects/splitly.jpg'),
  "title": "SplitFlow AI Receipt & Bill Splitting ",
  "description": "Built a modern expense-splitting platform that uses GPT-4o Vision to extract items, prices, and totals directly from receipt images. Implemented a full session-based workflow with friend management, smart item tagging, and automatic settlement calculation.",
  "techstack": "Next.js, Prisma, SQLite, OpenAI GPT-4o Vision, TypeScript",
  "link": "https://github.com/SrihariTadala/Splitly"
},

	
	{
		"img": require('./img/projects/OnlineCar.jpg'),
		"title": "TriMet GPS Data Pipeline",
		"description": "Implemented a real-time GPS data pipeline using Google Pub/Sub and PostgreSQL to process over 1.5 million transit records. Achieved 60% faster data handling and enabled interactive map visualizations using GeoJSON and MapboxGL for Portland's TriMet system.",
		"techstack": "Tech Stack: Python, PostgreSQL, Google Cloud, Numpy",
		"link": "https://github.com/SrihariTadala/TriMet-GPS-Data-Pipeline",
		// "category": "HTML/CSS"
	},
	
	{
		"img": require('./img/projects/MedECare.jpg'),
		"title": "Whisper and Emotion Recognition using LSTM",
		"description": "Engineered a sophisticated AI tool utilizing the OpenSMILE toolkit for emotion detection, achieving a 95\% accuracy rate in identifying emotions such as happy, sad, anger, and neutral across thousands of samples.",
		"techstack": "Tech Stack: Tensorflow, OpenSMILE, Python",
		"link": "https://github.com/SrihariTadala/Whisper-and-Emotion-Recognition-using-LSTM",
		// "category": "Python"
	},
	
	{
		"img": require('./img/projects/todolist.jpg'),
		"title": "Symbol recognition and Text file generation for Latex environment",
		"description": "Created an advanced machine learning system that processes and converts mathematical notation into LaTeX code; reduced manual coding time by 70\%, allowing for quicker turnaround on technical report generation for clients and introduced a natural language processing (NLP) model to convert recognized symbols into LaTeX code, achieving 88\% code accuracy. . ",
		"techstack": "Latex, Python",
		"link": "https://github.com/KarthikTadala",
		// "category": "Python"
	},
	
	
	// {
	// 	"img": "",
	// 	"title": "Formula 1 Dashboard",
	// 	"description": "",
	// 	"link": "https://ninkuk.github.io/F1-Viz-Dashboard/",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": "",
	// 	"title": "American Food Access Visualizations",
	// 	"description": "",
	// 	"link": "https://github.com/Ninkuk/American-Food-Access-Visualization",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": require('./img/projects/asu.png'),
	// 	"title": "ASU Automation Scripts",
	// 	"description": "Python scripts to automate myASU and Canvas tasks. Includes utilities for class search and availability.",
	// 	"link": "https://github.com/Ninkuk/ASU_Scripts",
	// 	"category": "Python"
	// },
	// {
	// 	"img": "",
	// 	"title": "Photoshelter Migration",
	// 	"description": "",
	// 	"link": "",
	// 	"category": "Python"
	// },
]




export {categories, workExperience, projects};

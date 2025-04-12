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
        title: "Research Assistant",
        company: "Portland State University",
        period: "Dec 2024 - Present",
    },
    {
        title: "Software Developer",
        company: "Hindustan Petroleum Corporation Limited",
        period: "August 2022 - Sept 2023",
    },
   
];


const projects = [
	{
		"img": require('./img/projects/MERN.jpg'),
		"title": "CurrencyScope Stocks",
		"description": "Implemented a user-friendly financial dashboard using Flask and Bootstrap, offering real-time currency-adjusted stock prices and interactive features. Deployed on GCP with Docker for scalable and efficient hosting.",
		"techstack": "Tech Stack: Python, Flask, Javascript, AWS EC2, API.",
		"link": "https://github.com/SrihariTadala/CurrencyScope-Stocks",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/NYCTaxi.jpg'),
		"title": "MediConnect",
		"description": "Engineered a machine learning and NLP-powered chatbot to enhance user engagement, offering automated assistance and personalized recommendations and modernized healthcare e-commerce platform to streamline procurement and inventory management, leveraging Flask, PostgreSQL, and JavaScript for seamless transactions..",
		"techstack": "Python, Flask, PostgreSQL, JavaScript, HTML, CSS",
		"link": "https://github.com/SrihariTadala",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/OnlineCar.jpg'),
		"title": "TriMet GPS Data Pipeline",
		"description": "Designed an Online Car Parking System that enabled real-time parking management, reservations, and efficient data handling. I utilized Spring and Hibernate for CRUD operations on an MySQL, enhancing user experience by reducing retrieval times. Additionally, I incorporated secure credit card processing, facilitating seamless online transactions for payments",
		"techstack": "Tech Stack: Python, PostgreSQL, Google Cloud, Numpy",
		"link": "https://github.com/SrihariTadala/TriMet-GPS-Data-Pipeline",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/MedECare.jpg'),
		"title": "Whisper and Emotion Recognition using LSTM",
		"description": "Engineered a sophisticated AI bot utilizing the OpenSMILE toolkit for emotion detection, achieving a 95\% accuracy rate in identifying emotions such as happy, sad, anger, and neutral across thousands of samples.",
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
	{
		"img": require('./img/projects/browserext.jpg'),
		"title": "Unmasking AI Bias:Benchmarking Models for Fair Hiring",
		"description": "Developed a multi-language AI-driven resume screening system using LangChain, Google AI, and Streamlit, improving processing speed by 50% and enhancing bias analysis. Implemented explainable AI for transparent hiring decisions and proposed bias mitigation strategies. Compared AI models (Grok-2 Beta, Cohere, Gemini) using Matplotlib and extracted resumes with PyPDF2 for analysis..",
		"techstack": "Tech Stack: PDF2Image, LangChain, Streamlit, Python.",
		"link": "https://github.com/SrihariTadala/Unmasking-AI-Bias-Benchmarking-Models-for-Fair-Hiring",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/Steg.jpg'),
		"title": "SummarEase:",
		"description": "Executed a user centric extension that consolidated feedback from 450+ users, creating concise summaries that facilitated data-driven decisions, ultimately increasing user retention rates by 10\% over six months.",
		"techstack": "Tech Stack:  Tensorflow, Python, NLTK, Gensim, BeautifulSoup  ",
		"link": "https://github.com/SrihariTadala/Text_Summarizer-",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/SER.jpg'),
		"title": "RetinaScan: Deep Learning for Glaucoma Screening",
		"description": "Our project leverages deep learning to detect and classify glaucoma from fundus images using the Drishti-GS1 dataset. We employ U-Net for optic disc segmentation and VGG16 for classification. Built with Keras, TensorFlow, OpenCV, and Python, this model aids early glaucoma detection, preventing vision loss..",
		"techstack": "Tech Stack: Python, TensorFlow & Keras, CNN, OpenCV,   ",
		"link": "https://github.com/SrihariTadala/Glaucoma-Detection-and-Classification",
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

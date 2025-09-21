import Masthead from './img/pic1.jpg';
import {useState} from "react";
import ProjectCard from "./Components/ProjectCard";
import WorkCard from "./Components/WorkCard";
import {categories, projects, workExperience} from './Data';

function App() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	function getProjects() {
		if (selectedCategory !== "All") {
			return projects.filter(project => project.category.includes(selectedCategory));
		} else {
			return projects;
		}
	}

	return (
		<>
			<div className="container">
				{/* NAVIGATION */}
				<nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
					<div className="container-fluid">
						{/* Logo */}
						{/*<a className="navbar-brand" href="#">*/}
						{/*	<img src={Logo} alt="Bootstrap" width={50}/>*/}
						{/*</a>*/}

						{/* Hamburger Menu */}
						<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-links">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* Navbar Links */}
						<div className="collapse navbar-collapse d-sm-flex flex-row-reverse" id="navbar-links">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="#about">About</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#work">Work</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#projects">Projects</a>
								</li>
								
								
							</ul>
						</div>
					</div>
				</nav>

				{/* HEADER */}
				<section id="header">
					<div className="row align-items-center">
						<div className="col-12 col-sm-6">
						<div className="profile-pic-container">
						<div className="profile-pic-container">
    <img src={Masthead} alt="Profile Picture" className="profile-pic"/>
</div>

</div>

						</div>

						<div className="col-12 col-sm-6">
							<h2 className={"mb-0"}>Hi, I'm</h2>
							{/*, borderBottom: "5px solid #00e676"*/}
							{/* <h1 style={{color: "#00e676"}}>Srihari Tadala</h1> */}
							<h1 style={{color: "#7251e6"}}>Srihari Tadala</h1>
							<h3>Software Engineer, </h3>

							<div className="hstack gap-3">
								<a className="link-light" href="https://www.linkedin.com/in/-sriharitadala-/"
								   target="_blank">
									<i className="bi bi-linkedin"/>
								</a>
								<a className="link-light" href="https://github.com/SrihariTadala" target="_blank">
									<i className="bi bi-github"/>
								</a>
<a
  className="link-light"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sriharitadala@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-envelope"/>
</a>



							</div>
<a
  className="btn btn-outline-danger mt-4 px-3 py-2 d-block mx-auto"
  href="https://www.linkedin.com/in/-sriharitadala-/"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact me for Resume
</a>



						</div>
					</div>

					<a href="#about"><i className="bi bi-chevron-down fs-1 fw-bold chevron text-light"/></a>
				</section>

				{/*	ABOUT */}
				<section id="about" className="mt-3">
					<h2>About Me</h2>
					<p className="lead">
  Aloha! I'm Srihari, a software engineer and problem solver who loves scalable systems and generative AI. I completed my Master's degree in Computer Science at Portland State University. My main areas of study are software engineering and large language models.
  .
</p>
<p className="lead">
At PSU, I made a SaaS survey platform with translation tools, better CI/CD pipelines, and tests that covered 95% of the code.  This cut the number of bugs that came up after the release in half.  I changed the ACE Analytics platform at HP from a single design to microservices and made a serverless AWS framework using Lambda and DynamoDB.  This sped up testing and made the system more flexible.  I was in charge of creating a student portal for IEEE that had more than 2,000 users.  In Python and Java, I made safe backends and reusable React components.<p className="lead">
Most recently, I built an LLM-Orchestrated Multi-Agent Research Platform, combining LangGraph, RAG, and WebSearch agents to perform parallel information retrieval and generate visually enriched research summaries. The system featured a multi-modal document pipeline (with Docling, Airflow, and AWS S3) for processing text, tables, and images, and used Pinecone for vector search. I also implemented state-driven orchestration to manage agent collaboration across tasks while maintaining context. The platform included a FastAPI backend with real-time WebSockets, JWT authentication, and a Streamlit frontend deployed on GCP.
</p>
<p className="lead">
I like to solve hard problems with a mix of curiosity and determination, and I'm excited to bring that energy to full-time jobs as a software engineer.</p>


				</section>

				{/*	WORK */}
				<section id="work" className="work-experience-section mt-5">
    <h2>Work Experience</h2>
	<div className="work-card-container">
    {workExperience.map((work, index) => (
        <WorkCard key={index} work={work} />
    ))}
</div>

</section>
				{/*	PROJECTS */}
				<section id="projects" className="mt-5">
					<h2>Projects</h2>

					{/*	PROJECTS */}
					<div className="row g-2 mt-3">
						{
							getProjects().map(project => (
								<div className="col-12 col-md-6 col-lg-3">
									<ProjectCard project={project}/>
								</div>
							))
						}
					</div>
				</section>
			</div>

			{/*	Back to top */}
			<div className="sticky-md-bottom float-end">
				<div className="text-center">
					<a href="#" className="nav-link">
						<i className="bi bi-caret-up-fill"></i> Back to top
					</a>
				</div>
			</div>
		</>
	);
}

export default App;

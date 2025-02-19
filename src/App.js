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
								<a className="link-light" href="https://www.linkedin.com/in/-sriharitadala-"
								   target="_blank">
									<i className="bi bi-linkedin"/>
								</a>
								<a className="link-light" href="https://github.com/KarthikTadala" target="_blank">
									<i className="bi bi-github"/>
								</a>
								<a className="link-light" href="mailto:sriharitadala@gmail.com">
    <i className="bi bi-envelope"/>
</a>

								<a className="link-light" href="https://www.instagram.com/tanmay_karthik/" target="_blank">
									<i className="bi bi-instagram"/>
								</a>
							</div>

							<a
								className="btn btn-outline-danger mt-4 px-5"
								role="button"
								// href={Resume}
								>
								<span>Contact me for Resume</span>
							</a>
						</div>
					</div>

					<a href="#about"><i className="bi bi-chevron-down fs-1 fw-bold chevron text-light"/></a>
				</section>

				{/*	ABOUT */}
				<section id="about" className="mt-3">
					<h2>About Me</h2>
					<p className="lead">
  Aloha! I'm Srihari, and a problem solver and software engineer passionate about scalable systems, data engineering, and machine learning. Currently, I’m pursuing my Master’s in Computer Science at Portland State University, where I focus on software development, cloud computing, and Large Language Models.
  .
</p>
<p className="lead">
Aloha! Srihari is currently pursuing a Master’s in Computer Science at Portland State University, focusing on software development and emerging technologies. Previously, as a Software Developer at HPCL, he worked on enhancing pipeline anomaly detection using ML, improving detection times by 25% and achieving 95.93% accuracy. He also played a key role in designing a scalable architecture that increased peak traffic handling by 50%.
</p>
<p className="lead">
One of his most impactful projects involved developing a real-time data pipeline for TriMet’s public transportation system. Leveraging Python, PostgreSQL, and Google Cloud, he built a system capable of processing 1.5 million+ GPS data points daily. By optimizing bulk insert functionality, he reduced processing time by 60%. Additionally, he implemented Google Pub/Sub, GeoJSON, and MapboxGL, enabling real-time messaging and interactive mapping, leading to a 40% improvement in data processing speed for public transit vehicles.
</p>
<p className="lead">
Beyond technical expertise, Srihari values resilience and adaptability. Facing challenges and uncertainties throughout his journey, he has embraced change as an opportunity for growth. As Mark Zuckerberg once said, "The biggest risk is not taking any risk." Srihari thrives on challenges and is committed to building scalable, impactful solutions in the world of software engineering.
</p>
<p className="lead">
 🚀 He is actively seeking full-time Software Engineer roles and can be reached at sriharitadala(at)gmail(dot)com.</p>


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

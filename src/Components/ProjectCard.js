import React from 'react';

function ProjectCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25 h-100">
		<img 
    src={props.project.img} 
    className="card-img-top project-card-img" 
    alt={props.project.title}
    style={{
        width: "100%",      // Ensures full width of card
        height: "200px",    // Fixed height for consistency
        objectFit: "cover", // Prevents stretching, keeps aspect ratio
        borderRadius: "8px" // Optional: Rounded corners for a cleaner look
    }}
/>

			<div className="card-body">
				<h5 className="card-title fw-bold">{props.project.title}</h5>
				<p className="card-text">{props.project.description}</p>
				<p className="card-techstack">{props.project.techstack}</p>
				<a href={props.project.link} className="stretched-link" target="_blank" rel="noreferrer"/>
			</div>
		</div>
	);
}

export default ProjectCard;

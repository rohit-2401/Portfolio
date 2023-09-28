import React from "react";
import Project from "../Project/Project";
import Donatedog from "../../images/donation-website.png";
import paper from "../../images/paper.png"
import "./Projects.css";

const Projects = () => {
	//List of projects
	const projects = [
		{
			title: "Registration Website",
			demoLink: "https://rohit-2401.github.io/vsk.github.io/",
			sourceCodeLink: "https://github.com/rohit-2401/vsk.github.io",
			imageSrc: Donatedog,
		},
		{
			title: "Research Paper with Code",
			demoLink: "https://link.springer.com/chapter/10.1007/978-981-19-9748-8_41",
			sourceCodeLink: "https://github.com/rohit-2401/Currencyidentifier-paper",
			imageSrc: paper,
		},
	];

	return (
		<div style={{ background: "rgb(40, 40, 40)" }}>
			<h1 className="work-heading">My Work</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Projects;

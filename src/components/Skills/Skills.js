import React from "react";
import ReactLogo from "../../images/react.png";
import cssLogo from "../../images/css.png";
import htmlLogo from "../../images/html.png";
import javaLogo from "../../images/java.png";
import firebaseLogo from "../../images/firebase.png";
import mongodbLogo from "../../images/mongodb.png";
import javascriptLogo from "../../images/javascript.png";
import nodeLogo from "../../images/node-js.png";
import pythonLogo from "../../images/python.png";
import burpLogo from "../../images/Burp.png";
import metaLogo from "../../images/Meta.png";
import wireLogo from "../../images/Wireshark.png";
import kaliLogo from "../../images/Kali.png";
import "./Skills.css";

const Skills = () => {
	const images = [
		htmlLogo,
		cssLogo,
		javascriptLogo,
		firebaseLogo,
		pythonLogo,
		wireLogo,
		metaLogo,
		kaliLogo,
		mongodbLogo,
		ReactLogo,
		nodeLogo,
		javaLogo,
		burpLogo,
	];

	const logoImage = "logo-image";

	return (
		<div id="skills">
			<h1>Skills And Technologies</h1>
			<div className="heart"></div>
			<div className="skills-container">
				{images.map((img, index) => {
					return (
						<div className={logoImage + " image-" + (index + 3)} key={index}>
							<img src={img} alt="" className="skill-image" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;

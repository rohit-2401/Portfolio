import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1>Contact</h1>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/rohit-suresh24/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					href="https://www.instagram.com/rohit-2401/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://github.com/rohit-2401"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					href="mailto:rohitsuresh34@gmail.com"
					target="_blank"
					rel="noreferrer noopener"
				>
				<i class="far fa-envelope"></i>
				</a>
		
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
				Rohit Suresh Kumar &copy; 
			</p>
		</footer>
	);
};

export default Footer;

import React from "react";

import classes from "./Footer.module.css";
import Logo from "../Logo/Logo";
import emailCircle from "../../assets/email-icon-circle.svg";
import linkedinCircle from "../../assets/linkedin-icon-circle.svg";
import mediumCircle from "../../assets/medium-icon-circle.svg";
import githubCircle from "../../assets/github-icon-circle.svg";

const Footer = props => {
	return (
		<div className={classes.Footer}>
			<Logo />
			<div className={classes.Line}></div>
			<span>
				<a href={"mailto:ryan@ryanseit.com"}>
					<img src={emailCircle} alt='email' />
				</a>
				<a href='https://www.linkedin.com/in/ryan-seit/'>
					<img src={linkedinCircle} alt='linkedin' />
				</a>
				<a href='https://medium.com/@ryan_49675'>
					<img src={mediumCircle} alt='medium' />
				</a>
				<a href='https://github.com/ryan-seit'>
					<img src={githubCircle} alt='github' />
				</a>
			</span>

			<p>© Ryan Seit 2020</p>
		</div>
	);
};

export default Footer;

import React from "react";

import classes from "./Footer.module.css";
import Logo from "../Logo/Logo";

const Footer = props => {
	return (
		<div className={classes.Footer}>
			<Logo />
			<ul>
				<li>LINKEDIN</li>
				<li>GITHUB</li>
				<li>MEDIUM</li>
			</ul>
		</div>
	);
};

export default Footer;

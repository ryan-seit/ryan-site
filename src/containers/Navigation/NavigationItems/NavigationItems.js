import React from "react";

import github from "../../../assets/github-icon.svg";
import linkedin from "../../../assets/linkedin-icon.svg";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

// Contains each NavigationItem in the Navigation Bar
const NavigationItems = props => {
	return (
		<div className={classes.NavigationItems}>
			<NavigationItem>ABOUT</NavigationItem>
			<NavigationItem>TECHNOLOGY</NavigationItem>
			<NavigationItem>MUSIC</NavigationItem>
			<NavigationItem>RESUME</NavigationItem>
			<NavigationItem>CONTACT</NavigationItem>
			<NavigationItem>
				<img src={linkedin} alt='linkedin' />
			</NavigationItem>
			<NavigationItem>
				<img src={github} alt='github' />
			</NavigationItem>
		</div>
	);
};

export default NavigationItems;

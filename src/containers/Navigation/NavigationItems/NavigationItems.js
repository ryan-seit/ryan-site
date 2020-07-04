import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = props => {
	return (
		<div className={classes.NavigationItems}>
			<ul>
				<NavigationItem>ABOUT</NavigationItem>
				<NavigationItem>TECHNOLOGY</NavigationItem>
				<NavigationItem>MUSIC</NavigationItem>
				<NavigationItem>RESUME</NavigationItem>
				<NavigationItem>CONTACT</NavigationItem>
			</ul>
			<ul>
				<NavigationItem>LINKEDIN</NavigationItem>
				<NavigationItem>GITHUB</NavigationItem>
			</ul>
		</div>
	);
};

export default NavigationItems;

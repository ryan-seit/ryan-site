import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

import LINKEDINplain from "../../UI/Icons/LINKEDINplain";
import GITHUBplain from "../../UI/Icons/GITHUBplain";

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
				<LINKEDINplain />
			</NavigationItem>
			<NavigationItem>
				<GITHUBplain />
			</NavigationItem>
		</div>
	);
};

export default NavigationItems;

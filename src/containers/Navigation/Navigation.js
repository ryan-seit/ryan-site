import React from "react";

import classes from "./Navigation.module.css";
// import NavigationItems from "./NavigationItems/NavigationItems";
import github from "../../assets/github-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import Logo from "../Logo/Logo";

// Displays the Navigation Bar
const navigation = props => {
	return (
		<div className={classes.Navigation}>
			<Logo />
			{/* <NavigationItems /> */}
			<div className={classes.About}>ABOUT</div>
			<div className={classes.Technology}>TECHNOLOGY</div>
			<div className={classes.Music}>MUSIC</div>
			<div className={classes.Resume}>RESUME</div>
			<div className={classes.Contact}>CONTACT</div>
			<div className={classes.External}>
				<div className={classes.LinkedIn}>
					<img src={linkedin} alt='linkedin' />
				</div>
				<div className={classes.Github}>
					<img src={github} alt='github' />
				</div>
			</div>
		</div>
	);
};

export default navigation;

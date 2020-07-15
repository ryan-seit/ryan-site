import React from "react";
import { NavLink } from "react-router-dom";

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
			<NavLink to='/about'>
				<div className={classes.About}>ABOUT</div>
			</NavLink>
			<NavLink to='/technology'>
				<div className={classes.Technology}>TECHNOLOGY</div>
			</NavLink>
			<NavLink to='/music'>
				<div className={classes.Music}>MUSIC</div>
			</NavLink>
			<NavLink to='/resume'>
				<div className={classes.Resume}>RESUME</div>
			</NavLink>
			<NavLink to='/contact'>
				<div className={classes.Contact}>CONTACT</div>
			</NavLink>

			<div className={classes.External}>
				<a href='https://www.linkedin.com/in/ryan-seit/'>
					<div className={classes.LinkedIn}>
						<img src={linkedin} alt='linkedin' />
					</div>
				</a>
				<a href='https://github.com/ryan-seit'>
					<div className={classes.Github}>
						<img src={github} alt='github' />
					</div>
				</a>
			</div>
		</div>
	);
};

export default navigation;

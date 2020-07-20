import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import LINKEDINplain from "../UI/Icons/LINKEDINplain";
import LOGO from "../UI/Logo/LOGO";
import GITHUBplain from "../UI/Icons/GITHUBplain";

// Displays the Navigation Bar
const navigation = props => {
	return (
		<div className={classes.Navigation}>
			<NavLink to='/'>
				<div className={classes.Logo}>
					<LOGO />
				</div>
			</NavLink>
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
						<LINKEDINplain />
					</div>
				</a>
				<a href='https://github.com/ryan-seit'>
					<div className={classes.Github}>
						<GITHUBplain />
					</div>
				</a>
			</div>
		</div>
	);
};

export default navigation;

import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LOGO from "../../UI/Logo/LOGO";
import LINKEDINplain from "../../UI/Icons/LINKEDINplain";
import GITHUBplain from "../../UI/Icons/GITHUBplain";

// Contains each NavigationItem in the Navigation Bar
const NavigationItems = props => {
	return (
		<div className={classes.NavigationItems}>
			<div className={classes.Logo}>
				<NavLink to='/'>
					<LOGO />
				</NavLink>
			</div>
			<NavigationItem link='/about' exact>
				ABOUT
			</NavigationItem>
			<NavigationItem link='/technology' exact>
				TECHNOLOGY
			</NavigationItem>
			<NavigationItem link='/music' exact>
				MUSIC
			</NavigationItem>
			<NavigationItem link='/resume' exact>
				RESUME
			</NavigationItem>

			<div className={classes.External}>
				<div className={classes.LinkedIn}>
					<a
						href='https://www.linkedin.com/in/ryan-seit/'
						target='_blank'
						rel='noopener noreferrer'
						alt='Ryan Seit LinkedIn Page'
					>
						<LINKEDINplain />
					</a>
				</div>
				<div className={classes.Github}>
					<a
						href='https://github.com/ryan-seit'
						target='_blank'
						rel='noopener noreferrer'
						alt='Ryan Seit GitHub Page'
					>
						<GITHUBplain />
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavigationItems;

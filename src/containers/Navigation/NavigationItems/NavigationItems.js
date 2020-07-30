import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LOGO from "../../UI/Logo/LOGO";
import LINKEDIN from "../../UI/Icons/LINKEDIN";
import GITHUB from "../../UI/Icons/GITHUB";
import EMAIL from "../../UI/Icons/EMAIL";
import MEDIUM from "../../UI/Icons/MEDIUM";

// Contains each NavigationItem in the Navigation Bar
const NavigationItems = props => {
	return (
		<div className={classes.NavigationItems}>
			<div className={classes.Logo}>
				<NavLink to='/'>
					<LOGO />
				</NavLink>
			</div>
			<NavigationItem link='/about' exact clicked={props.clicked}>
				ABOUT
			</NavigationItem>
			<NavigationItem link='/technology' exact clicked={props.clicked}>
				TECHNOLOGY
			</NavigationItem>
			<NavigationItem link='/music' exact clicked={props.clicked}>
				MUSIC
			</NavigationItem>
			<NavigationItem link='/resume' exact clicked={props.clicked}>
				RESUME
			</NavigationItem>

			<div className={classes.External}>
				<div className={classes.Email}>
					<a
						href='mailto:ryan@ryanseit.com'
						target='_blank'
						rel='noopener noreferrer'
						alt='Email Ryan Seit'
					>
						<EMAIL />
					</a>
				</div>
				<div className={classes.Github}>
					<a
						href='https://github.com/ryan-seit'
						target='_blank'
						rel='noopener noreferrer'
						alt='Ryan Seit GitHub Page'
					>
						<GITHUB />
					</a>
				</div>
				<div className={classes.LinkedIn}>
					<a
						href='https://www.linkedin.com/in/ryan-seit/'
						target='_blank'
						rel='noopener noreferrer'
						alt='Ryan Seit LinkedIn Page'
					>
						<LINKEDIN />
					</a>
				</div>
				<div className={classes.Medium}>
					<a
						href='https://medium.com/@ryan_49675'
						target='_blank'
						rel='noopener noreferrer'
						alt='Ryan Seit Medium Page'
					>
						<MEDIUM />
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavigationItems;

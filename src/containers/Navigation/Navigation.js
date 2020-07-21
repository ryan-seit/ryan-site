import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import LINKEDINplain from "../UI/Icons/LINKEDINplain";
import LOGO from "../UI/Logo/LOGO";
import GITHUBplain from "../UI/Icons/GITHUBplain";

// Displays the Navigation Bar
const navigation = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Navigation}>
				<NavLink to='/'>
					<div className={classes.Logo}>
						<LOGO />
					</div>
				</NavLink>
				<NavLink
					exact
					to='/about'
					className={classes.NavItem}
					activeClassName={classes.selected}
				>
					ABOUT
				</NavLink>
				<NavLink
					exact
					to='/technology'
					className={classes.NavItem}
					activeClassName={classes.selected}
				>
					TECHNOLOGY
				</NavLink>
				<NavLink
					exact
					to='/music'
					className={classes.NavItem}
					activeClassName={classes.selected}
				>
					MUSIC
				</NavLink>
				<NavLink
					exact
					to='/resume'
					className={classes.NavItem}
					activeClassName={classes.selected}
				>
					RESUME
				</NavLink>
				<NavLink
					exact
					to='/contact'
					className={classes.NavItem}
					activeClassName={classes.selected}
				>
					CONTACT
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
		</div>
	);
};

export default navigation;

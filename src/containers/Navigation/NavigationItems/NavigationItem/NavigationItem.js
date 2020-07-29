import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
	return (
		<div className={classes.NavigationItem}>
			<NavLink
				activeClassName={classes.selected}
				to={props.link}
				exact={props.exact}
				onClick={props.clicked}
			>
				{props.children}
			</NavLink>
		</div>
	);
};

export default NavigationItem;

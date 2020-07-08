import React from "react";
import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
	return <div className={classes.NavigationItem}>{props.children}</div>;
};

export default NavigationItem;

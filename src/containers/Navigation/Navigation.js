import React from "react";

import classes from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../Logo/Logo";

// Displays the Navigation Bar
const navigation = props => {
	return (
		<div className={classes.Navigation}>
			<Logo />
			<NavigationItems />
		</div>
	);
};

export default navigation;

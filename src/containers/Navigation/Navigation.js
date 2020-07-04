import React from "react";

import classes from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../Logo/Logo";

const navigation = props => {
	return (
		<div className={classes.Nav}>
			<Logo />
			<NavigationItems />
		</div>
	);
};

export default navigation;

import React from "react";

import classes from "./Navigation.module.css";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "./NavigationItems/NavigationItems";

// Displays the Navigation Bar
const navigation = props => {
	return (
		<>
			<DrawerToggle clicked={props.drawerToggleClicked} />
			<div className={classes.Navigation}>
				<NavigationItems />
			</div>
		</>
	);
};

export default navigation;

import React, { useState } from "react";

import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = props => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);

	const sideDrawerCloseHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer(!showSideDrawer);
	};

	return (
		<>
			<div className={classes.Layout}>
				<Navigation drawerToggleClicked={sideDrawerToggleHandler} />
				<SideDrawer closed={sideDrawerCloseHandler} open={showSideDrawer} />
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;

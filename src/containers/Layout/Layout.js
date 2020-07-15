import React from "react";

import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = props => {
	return (
		<div className={classes.Layout}>
			<Navigation />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;

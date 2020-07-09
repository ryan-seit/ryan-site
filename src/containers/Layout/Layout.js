import React from "react";

import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Landing from "../Pages/Landing/Landing";
import Footer from "../Footer/Footer";

const Layout = props => {
	return (
		<div className={classes.Layout}>
			<Navigation />
			<Landing />
			<Footer />
		</div>
	);
};

export default Layout;

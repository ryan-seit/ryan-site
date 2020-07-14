import React from "react";

import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Landing from "../Pages/Landing/Landing";
import Footer from "../Footer/Footer";

const RenderLanding = () => {
	return (
		<>
			<Landing />
			<Footer />
		</>
	);
};

const RenderLayout = props => {
	return (
		<div className={classes.Layout}>
			<Navigation />
			<Landing />
			<Footer />
		</div>
	);
};

const Layout = props => {
	return (
		<>
			{window.location.pathname === "/"
				? RenderLanding(props)
				: RenderLayout(props)}
		</>
	);
};

export default Layout;

import React from "react";
import allDrums from "../../../assets/Landing/allDrums.svg";
import classes from "./Landing.module.css";

const Landing = props => {
	return (
		<div className={classes.Landing}>
			<img src={allDrums} alt='All Drums' />;
		</div>
	);
};

export default Landing;

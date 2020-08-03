import React from "react";
import { NavLink } from "react-router-dom";
import useLockBodyScroll from "../../useLockBodyScroll";
// import allDrums from "../../../assets/Landing/allDrums.svg";
import LOGO from "../../UI/Logo/LOGO";

import CRASHL from "../../UI/Landing/CRASHL";
import CRASHR from "../../UI/Landing/CRASHR";
import HIHAT from "../../UI/Landing/HIHAT";
import RIDE from "../../UI/Landing/RIDE";
import SNARE from "../../UI/Landing/SNARE";
import TOM from "../../UI/Landing/TOM";
import FLOORTOM from "../../UI/Landing/FLOORTOM";

import classes from "./Landing.module.css";

const Landing = props => {
	useLockBodyScroll();

	return (
		<div className={classes.Wrapper}>
			<div className={classes.Landing}>
				<div className={classes.Logo}>
					<LOGO />
				</div>
				<NavLink to='/resume'>
					<div className={classes.crashL}>
						<CRASHL />
						<h4>RESUME</h4>
					</div>
				</NavLink>
				<NavLink to='/music'>
					<div className={classes.crashR}>
						<CRASHR />
						<h4>MUSIC</h4>
					</div>
				</NavLink>
				<div className={classes.hihat}>
					<HIHAT />
				</div>
				{/* <NavLink to='/about'> */}
				{/* <h4>ABOUT</h4> */}
				{/* </NavLink> */}
				<NavLink to='/technology'>
					<div className={classes.ride}>
						<RIDE />
						<h4>TECHNOLOGY</h4>
					</div>
				</NavLink>
				<div className={classes.snare}>
					<SNARE />
				</div>
				<div className={classes.tom}>
					<TOM />
				</div>
				<div className={classes.floorTom}>
					<FLOORTOM />
				</div>
			</div>
		</div>
	);
};

export default Landing;

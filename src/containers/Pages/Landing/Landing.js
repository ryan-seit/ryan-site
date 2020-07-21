import React from "react";
import { NavLink } from "react-router-dom";
// import allDrums from "../../../assets/Landing/allDrums.svg";
import LOGO from "../../UI/Logo/LOGO";
import crashL from "../../../assets/Landing/crashL.svg";
import crashR from "../../../assets/Landing/crashR.svg";
import floorTom from "../../../assets/Landing/floorTom.svg";
import hihat from "../../../assets/Landing/hihat.svg";
import ride from "../../../assets/Landing/ride.svg";
import snare from "../../../assets/Landing/snare.svg";
import tom from "../../../assets/Landing/tom.svg";
import classes from "./Landing.module.css";

const Landing = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Landing}>
				<div className={classes.Logo}>
					<LOGO />
				</div>
				<NavLink to='/resume'>
					<img className={classes.crashL} src={crashL} alt='Resume' />
				</NavLink>
				<NavLink to='/music'>
					<img className={classes.crashR} src={crashR} alt='Music' />
				</NavLink>
				<NavLink to='/contact'>
					<img className={classes.floorTom} src={floorTom} alt='Contact' />
				</NavLink>
				<NavLink to='/about'>
					<img className={classes.hihat} src={hihat} alt='About' />
				</NavLink>
				<NavLink to='/technology'>
					<img className={classes.ride} src={ride} alt='Technology' />
				</NavLink>
				<img className={classes.snare} src={snare} alt='none' />
				<img className={classes.tom} src={tom} alt='none' />
			</div>
		</div>
	);
};

export default Landing;

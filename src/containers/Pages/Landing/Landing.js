import React from "react";
import { NavLink } from "react-router-dom";
// import allDrums from "../../../assets/Landing/allDrums.svg";
import Logo from "../../../assets/logo.svg";
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
					<img src={Logo} alt='Logo' />
				</div>
				<NavLink to='/resume'>
					<div className={classes.crashL}>
						<img src={crashL} alt='Resume' />
					</div>
				</NavLink>
				<NavLink to='/music'>
					<div className={classes.crashR}>
						<img src={crashR} alt='Music' />
					</div>
				</NavLink>
				<NavLink to='/contact'>
					<div className={classes.floorTom}>
						<img src={floorTom} alt='Contact' />
					</div>
				</NavLink>
				<NavLink to='/about'>
					<div className={classes.hihat}>
						<img src={hihat} alt='About' />
					</div>
				</NavLink>
				<NavLink to='/technology'>
					<div className={classes.ride}>
						<img src={ride} alt='Technology' />
					</div>
				</NavLink>
				<div className={classes.snare}>
					<img src={snare} alt='none' />
				</div>
				<div className={classes.tom}>
					<img src={tom} alt='none' />
				</div>
			</div>
		</div>
	);
};

export default Landing;

import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/logo.svg";
// import logoWhite from "../../assets/logo-white.svg";

// Contains the site Logo
const Logo = props => {
	return <img className={classes.Logo} src={logo} alt='Ryan Seit Logo' />;
};

export default Logo;

import React from "react";

import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import LOGOBLOCK from "../../UI/Logo/LOGOBLOCK";

const SideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	// console.log(props);
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<div className={classes.SideDrawer__Top}>
					<div className={classes.Logo}>
						<LOGOBLOCK />
					</div>
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
};

export default SideDrawer;

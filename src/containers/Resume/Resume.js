import React from "react";

import classes from "./Resume.module.css";
import Ryan_Seit_Resume from "../../assets/Resume/Ryan_Seit_Resume.png";

const Resume = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Resume}>
				<img src={Ryan_Seit_Resume} alt='Ryan Seit Resume' />
				<p>Resume download link</p>
			</div>
		</div>
	);
};

export default Resume;

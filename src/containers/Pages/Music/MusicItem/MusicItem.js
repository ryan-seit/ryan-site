import React from "react";

import classes from "./MusicItem.module.css";

const MusicItem = props => {
	return (
		<div className={classes.ProjectSection}>
			<div className={classes.ProjectSectionImg}>
				<img src={props.img} alt={props.imgAlt} />
			</div>
			<div className={classes.ProjectSectionTitle}>
				<h3>{props.title}</h3>
			</div>
			<div className={classes.ProjectSectionDetail}>
				<p>{props.detail}</p>
			</div>
		</div>
	);
};

export default MusicItem;

import React from "react";

import classes from "./MusicItem.module.css";
import LazyImgLoader from "../../../hoc/LazyImgLoader/LazyImgLoader";

const MusicItem = props => {
	return (
		<div className={classes.ProjectSection}>
			<div className={classes.ProjectSectionImg}>
				<LazyImgLoader
					className='lazyimg'
					aspectRatio={16 / 16}
					lqip={props.lqip}
					src={props.img}
					alt={props.title}
				/>
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

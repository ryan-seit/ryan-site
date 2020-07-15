import React from "react";
import classes from "./Technology.module.css";
import TechnologyItem from "./TechnologyItem/TechnologyItem";

const Technology = props => {
	return (
		<div className={classes.Wrapper}>
			<TechnologyItem />
			{/* <TechnologyItem /> */}
			{/* <TechnologyItem /> */}
			<div className={classes.Pagination}>
				<p>1 -- 2 -- 3 -- 4 -- 5</p>
			</div>
		</div>
	);
};

export default Technology;

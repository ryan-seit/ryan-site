import React from "react";

import classes from "./TechnologyItem.module.css";

import CSS from "../../../UI/Icons/CSS";
import REACT from "../../../UI/Icons/REACT";
import HTML from "../../../UI/Icons/HTML";
import JS from "../../../UI/Icons/JS";
import PG from "../../../UI/Icons/PG";
import RUBY from "../../../UI/Icons/RUBY";
import RAILS from "../../../UI/Icons/RAILS";
import GITHUB from "../../../UI/Icons/GITHUB";
import CHROME from "../../../UI/Icons/CHROME";
import MEDIUM from "../../../UI/Icons/MEDIUM";

// Renders an individual project, parent component Technology

// TODO: (Stretch Goal) Abstract Image, Title, External Links and Description to state in order to dynamically generate them using an admin UI
// TODO: Create uniform External Links background color and add hover transitions

const TechnologyItem = props => (
	<div className={classes.Technology}>
		<div className={classes.PortfolioImage}>
			<div className={classes.PortfolioInfo}>
				<h3>Made with</h3>
				<ul>
					<li>
						<REACT />
					</li>
					<li>
						<JS />
					</li>
					<li>
						<RUBY />
					</li>
					<li>
						<RAILS />
					</li>
					<li>
						<PG />
					</li>
					<li>
						<CSS />
					</li>
					<li>
						<HTML />
					</li>
				</ul>
			</div>

			<img
				className={classes.Image}
				src={props.project.img}
				alt={props.project.title}
			/>
		</div>
		<div className={classes.Details}>
			{/* Project title */}
			<h2>{props.project.title}</h2>
			{/* External links to relevant project information */}
			<ul>
				<li>
					<a href={props.project.links.medium} alt='Medium Blog Post'>
						<MEDIUM />
					</a>
				</li>
				<li>
					<a href={props.project.links.github} alt='Github Repo'>
						<GITHUB />
					</a>
				</li>
				<li>
					<a href={props.project.links.web} alt='Website'>
						<CHROME />
					</a>
				</li>
			</ul>
			{/* Project summary */}
			<p>{props.project.desc}</p>
		</div>
	</div>
);

export default TechnologyItem;

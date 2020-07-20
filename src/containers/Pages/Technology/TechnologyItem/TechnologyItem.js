import React from "react";

import classes from "./TechnologyItem.module.css";
// import projectImage from "../../../../assets/project-image.svg";
import Medium from "../../../../assets/medium-icon-circle.svg";
import Github from "../../../../assets/github-icon-circle.svg";
import Web from "../../../../assets/chrome-icon-circle.svg";

import reactIcon from "../../../../assets/Icons/react.svg";
import cssIcon from "../../../../assets/Icons/css.svg";
import htmlIcon from "../../../../assets/Icons/html.svg";
import jsIcon from "../../../../assets/Icons/js.svg";
import pgIcon from "../../../../assets/Icons/pg.svg";
import rubyIcon from "../../../../assets/Icons/ruby.svg";
import railsIcon from "../../../../assets/Icons/rails.svg";

import CSS from "../../../UI/Icons/CSS";
// Renders an individual project, parent component Technology

// TODO: (Stretch Goal) Abstract Image, Title, External Links and Description to state in order to dynamically generate them using an admin UI
// TODO: Create uniform External Links background color and add hover transitions

const TechnologyItem = props => (
	<div className={classes.Technology}>
		<div className={classes.Icons}>
			<h3>Made with</h3>
			<ul>
				<li>
					<img src={reactIcon} alt='React' />
				</li>
				<li>
					<img src={jsIcon} alt='JavaScript' />
				</li>
				<li>
					<img src={rubyIcon} alt='Ruby' />
				</li>
				<li>
					<img src={railsIcon} alt='Rails' />
				</li>
				<li>
					<img src={pgIcon} alt='PostgreSQL' />
				</li>
				<li>
					{/* <img src={cssIcon} alt='CSS 3' /> */}
					<CSS />
				</li>
				<li>
					<img src={htmlIcon} alt='HTML 5' />
				</li>
			</ul>
		</div>
		<img
			className={classes.Image}
			src={props.project.img}
			alt={props.project.title}
		/>
		<div className={classes.Details}>
			{/* Project title */}
			<h2>{props.project.title}</h2>
			{/* External links to relevant project information */}
			<ul>
				<li>
					<a href={props.project.links.medium} alt='Medium Blog Post'>
						<img src={Medium} alt='Medium' />
					</a>
				</li>
				<li>
					<a href={props.project.links.github} alt='Github Repo'>
						<img src={Github} alt='Github' />
					</a>
				</li>
				<li>
					<a href={props.project.links.web} alt='Website'>
						<img src={Web} alt='Website' />
					</a>
				</li>
			</ul>
			{/* Project summary */}
			<p>{props.project.desc}</p>
		</div>
	</div>
);

export default TechnologyItem;

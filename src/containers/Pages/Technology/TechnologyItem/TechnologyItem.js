import React from "react";

import classes from "./TechnologyItem.module.css";

import CSS from "../../../UI/Icons/CSS";
import REDUX from "../../../UI/Icons/REDUX";
import REACT from "../../../UI/Icons/REACT";
import HTML from "../../../UI/Icons/HTML";
import JS from "../../../UI/Icons/JS";
import PG from "../../../UI/Icons/PG";
import RUBY from "../../../UI/Icons/RUBY";
import RAILS from "../../../UI/Icons/RAILS";
import GITHUB from "../../../UI/Icons/GITHUB";
import CHROME from "../../../UI/Icons/CHROME";
import MEDIUM from "../../../UI/Icons/MEDIUM";
// import Spinner from "../../../UI/Icons/Spinner";

// Renders an individual project, parent component Technology

// TODO: (Stretch Goal) Abstract Image, Title, External Links and Description to state in order to dynamically generate them using an admin UI
// TODO: Create uniform External Links background color and add hover transitions

const TechnologyItem = props => {
	return (
		<div className={classes.Technology}>
			<div className={classes.PortfolioImage}>
				<div className={classes.PortfolioInfo}>
					<h3>Made with</h3>
					<ul>
						{props.project.tech.react ? (
							<li>
								<REACT />
							</li>
						) : null}
						{props.project.tech.js ? (
							<li>
								<JS />
							</li>
						) : null}
						{props.project.tech.redux ? (
							<li>
								<REDUX />
							</li>
						) : null}
						{props.project.tech.ruby ? (
							<li>
								<RUBY />
							</li>
						) : null}
						{props.project.tech.rails ? (
							<li>
								<RAILS />
							</li>
						) : null}
						{props.project.tech.pg ? (
							<li>
								<PG />
							</li>
						) : null}
						{props.project.tech.css ? (
							<li>
								<CSS />
							</li>
						) : null}
						{props.project.tech.html ? (
							<li>
								<HTML />
							</li>
						) : null}
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
				<div className={classes.Details__header}>
					<h2>{props.project.title}</h2>
					{/* External links to relevant project information */}
					<ul>
						{props.project.links.medium ? (
							<li>
								<a
									href={props.project.links.medium}
									alt='Medium Blog Post'
									target='_blank'
									rel='noopener noreferrer'
								>
									<MEDIUM />
								</a>
							</li>
						) : null}
						{props.project.links.github ? (
							<li>
								<a
									href={props.project.links.github}
									alt='Github Repo'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GITHUB />
								</a>
							</li>
						) : null}
						{props.project.links.web ? (
							<li>
								<a
									href={props.project.links.web}
									alt='Website'
									target='_blank'
									rel='noopener noreferrer'
								>
									<CHROME />
								</a>
							</li>
						) : null}
					</ul>
				</div>
				{/* Project summary */}
				<p>{props.project.desc}</p>
			</div>
		</div>
	);
};

export default TechnologyItem;

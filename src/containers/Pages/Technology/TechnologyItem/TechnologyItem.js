import React from "react";

import classes from "./TechnologyItem.module.css";
import projectImage from "../../../../assets/project-image.svg";
import Medium from "../../../../assets/medium-icon-circle.svg";
import Github from "../../../../assets/github-icon-circle.svg";
import Web from "../../../../assets/chrome-icon-circle.svg";

// Renders an individual project, parent component Technology

// TODO: (Stretch Goal) Abstract Image, Title, External Links and Description to state in order to dynamically generate them using an admin UI
// TODO: Create uniform External Links background color and add hover transitions

const TechnologyItem = props => (
	<div className={classes.Technology}>
		<img src={projectImage} alt='Placeholder' />
		<div className={classes.Details}>
			{/* Project title */}
			<h2>Project 1</h2>
			{/* External links to relevant project information */}
			<ul>
				<li>
					<a
						href='https://medium.com/@ryan_49675/beginners-guide-to-using-axios-23ca5922d183'
						alt='Medium Blog Post'
					>
						<img src={Medium} alt='Medium' />
					</a>
				</li>
				<li>
					<a
						href='https://github.com/ryan-seit/ecommify-frontend'
						alt='Github Repo'
					>
						<img src={Github} alt='Github' />
					</a>
				</li>
				<li>
					<a
						href='https://medium.com/@ryan_49675/beginners-guide-to-using-axios-23ca5922d183'
						alt='Website'
					>
						<img src={Web} alt='Website' />
					</a>
				</li>
			</ul>
			{/* Project summary */}
			<p>
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
				fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
				sequi nesciunt.
			</p>
		</div>
	</div>
);

export default TechnologyItem;

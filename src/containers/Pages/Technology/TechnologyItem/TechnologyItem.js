import React from "react";

import classes from "./TechnologyItem.module.css";
import projectImage from "../../../../assets/project-image.svg";
import Medium from "../../../../assets/medium-icon-circle.svg";
import Github from "../../../../assets/github-icon-circle.svg";
import Web from "../../../../assets/chrome-icon-circle.svg";

const TechnologyItem = props => (
	<div className={classes.Technology}>
		<img src={projectImage} alt='Placeholder' />
		<div className={classes.Details}>
			<h2>Project 1</h2>
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
			<p>
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
				fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
				sequi nesciunt.
			</p>
		</div>
	</div>
);

export default TechnologyItem;

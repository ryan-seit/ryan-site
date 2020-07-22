import React from "react";

import RyanDrums from "../../../assets/Headshots/RyanSeitDrums.png";
import AlbumArt from "../../../assets/Photos/MusicAcheFadeAway.jpg";
import classes from "./Music.module.css";

const Music = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Music}>
				<div className={classes.Hero}>
					<div className={classes.HeroImg}>
						<img src={RyanDrums} alt='Ryan Seit Drums' />
					</div>
					<div className={classes.HeroDetail}>
						<h2>Music</h2>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</p>
					</div>
				</div>

				<div className={classes.MusicProjects}>
					<h1>Music-Related Projects</h1>
					<div className={classes.ProjectSection}>
						<div className={classes.ProjectSectionImg}>
							<img src={AlbumArt} alt='Music Project Section' />
						</div>
						<div className={classes.ProjectSectionTitle}>
							<h3>Art + Design</h3>
						</div>
						<div className={classes.ProjectSectionDetail}>
							<p>
								Amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Music;

import React from "react";
import RyanDrums from "../../../assets/Images/RyanSeitDrums.png";
import AlbumArt from "../../../assets/Images/MusicAcheFadeAway.jpg";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem/MusicItem";

const Music = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Music}>
				<div className={classes.Hero}>
					<div className={classes.HeroImg}>
						<img
							className={classes.Loading}
							src={RyanDrums}
							alt='Ryan Seit Drums'
						/>
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
					<MusicItem
						img={AlbumArt}
						imgAlt='Performance'
						title='Performance'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img={AlbumArt}
						imgAlt='Performance'
						title='Recording + Editing'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img={AlbumArt}
						imgAlt='Performance'
						title='Design'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
				</div>
			</div>
		</div>
	);
};

export default Music;

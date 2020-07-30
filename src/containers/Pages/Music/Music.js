import React from "react";
import AlbumArt from "../../../assets/Images/MusicAcheFadeAway.jpg";
import RyanLive from "../../../assets/Images/RyanAcheLive1.png";
import MixingBoard from "../../../assets/Images/MixingBoard.png";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem/MusicItem";
import LazyImgLoader from "../../hoc/LazyImgLoader/LazyImgLoader";

const Music = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Music}>
				<div className={classes.Hero}>
					<LazyImgLoader
						className='lazyimg'
						aspectRatio={16 / 9}
						lqip='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAMCAgoKCgoKCgoKCgoKCggICgoKCAgICAoICAgICAgICAgICAgICAgICAgICAoICAgICgoKCAgNDQoIDQgICQj/2wBDAQMEBAYFBgoGBgoNDQoNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ3/wAARCAAbACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYDBAUHCf/EACkQAAICAQMDAwUAAwAAAAAAAAECAxEhAAQSBRNBBiIxB0JRYZEjgfD/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAoEQABAwIEBgIDAAAAAAAAAAABAgMRACEEEjFREyJBYYGhBZGxwfD/2gAMAwEAAhEDEQA/APMqB8al20xVgwokEEAqHF+LUghh+iCDrS6K6MyiZS3K1pbjYHA5MUING8fbYJIIBrpHp7Y7KAMZdiu4BCyqZ+pKkiWyhYu3thMpB4sWLASAFrUlF5KXHgk5SL+P2RXe4P4xb6eKhaQgHUhUpPSQhKiNwZjW9jXJ5VY2xFZIPt4gHyKoUR5FY81quz/9en3rjS7gyzJtnSCcxsHZml4KrZVJZ37rqWFc2Ad1+QAFArem/WMez70cmzjlkLOqySSPFIiG1X7HBAwQwKn5z51AdMHKmTsCPZ6RtVjgWeKnjPZGyDLikLMmTGVIEqCgAQZi5valGOYV8j+6NNn1B+pJ3KpG23hh7dEsoYzseNVJI4UhSCG48bJoljVE1q2FKTKhB2mfcUFjiwy8W8O7xEDRZQW535SSRBtc+KXOnzR8Czd21o3yjCciG4rVCQksMcWFC7rBO76d64X5jtLKpAuQ9yNkBIRVDo2LZlxk2PHK1VRJcWfOPgeHUCh8A15GcnOTrKc5/vjVlMpcmd/xQbXyTuEUkoNimSN5kXBkadiRJg09R9DkkcwmQKInc+92kCWCAnbY8TyZWB4kY55zTRdfiaFlVXRiCziRFCmiSOHbPNYlQNSqPyfwNRekn5xyK2RErvHgAqXVeQ5ABipKKeBJUEGlFm8/dH/LKPCFeI/HuA/3gn5vWASoLgkQOkb9/P8Aa0zU80cOFpQoOrJ5s8gJEnLly2gJgGZnYWqvuuqOzcmZmYYBb3ECite4G6GM3X6IGjVMmznyST/dGjMo2H1STju6hSu/Mb+6/9k='
						src='https://github.com/ryan-seit/ryan-site/blob/master/public/RyanDrums.jpeg?raw=true'
						alt='Ryan Playing Drums'
					/>
					<div className={classes.HeroDetail}>
						<h1>Music</h1>
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
						img={RyanLive}
						lqip=''
						imgAlt='Performance'
						title='Performance'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img={MixingBoard}
						lqip=''
						imgAlt='Performance'
						title='Recording + Editing'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img={AlbumArt}
						lqip=''
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

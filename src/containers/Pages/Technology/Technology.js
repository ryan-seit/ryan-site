import React from "react";
import Slider from "react-slick";
import classes from "./Technology.module.css";
import TechnologyItem from "./TechnologyItem/TechnologyItem";

const projects = {
	p1: {
		img:
			"https://github.com/ryan-seit/drumblr-frontend/raw/master/drumblr-image.png",
		title: "Drumblr",
		links: {
			github: "https://github.com/ryan-seit/ecommify-frontend",
			medium:
				"https://medium.com/@ryan_49675/beginners-guide-to-using-axios-23ca5922d183",
			web:
				"https://medium.com/@ryan_49675/beginners-guide-to-using-axios-23ca5922d183",
		},
		desc:
			"Designed as an homage to late 80's/early 90's drum machines, Drumblr is a digital drum machine users can play in the browser, with customizable tempo, rhythms, and presets.",
	},
};

// TODO: Add horizontal carousel layout
// TODO: Add pagination

const settings = {
	centerMode: true,
	infinite: true,
	centerPadding: "60",
	slidesToShow: 2.2,
	speed: 500,
	// arrows: true,
	// prevArrow: .prev,
	// nextArrow: .next
};

const Technology = props => {
	return (
		<div className={classes.Wrapper}>
			<Slider {...settings}>
				<div>
					<TechnologyItem project={projects.p1} />
				</div>
				<div>
					<TechnologyItem project={projects.p1} />
				</div>
				<div>
					<TechnologyItem project={projects.p1} />
				</div>
			</Slider>
		</div>
	);
};

export default Technology;

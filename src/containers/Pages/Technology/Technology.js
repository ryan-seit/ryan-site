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
			github: "https://github.com/ryan-seit/drumblr-frontend",
			medium: "",
			web: "",
		},
		desc:
			"Designed as an homage to late 80's/early 90's drum machines, Drumblr is a digital drum machine users can play in the browser, with customizable tempo, rhythms, and presets.",
	},
	p2: {
		img: "http://localhost:3000/BurgerBuilder.png",
		title: "Burger Builder",
		links: {
			github: "https://github.com/ryan-seit/burger-builder",
			medium: "",
			web: "",
		},
		desc:
			"Responsive POS application allowing customers to customize ingredients and place orders",
	},
	p3: {
		img: "http://localhost:3000/eCommify.png",
		title: "eCommify",
		links: {
			github: "https://github.com/ryan-seit/ecommify-frontend",
			medium: "",
			web: "",
		},
		desc:
			"E-Commerce clothing application allowing users to purchase clothing through an integrated Stripe API",
	},
};

const settings = {
	centerMode: true,
	infinite: true,
	centerPadding: "60",
	slidesToShow: 2.2,
	speed: 500,
	arrows: true,
};

const Technology = props => {
	return (
		<div className={classes.Wrapper}>
			<Slider {...settings}>
				<TechnologyItem project={projects.p1} />
				<TechnologyItem project={projects.p2} />
				<TechnologyItem project={projects.p3} />
			</Slider>
		</div>
	);
};

export default Technology;

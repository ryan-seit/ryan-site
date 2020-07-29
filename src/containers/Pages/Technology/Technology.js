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
		tech: {
			react: true,
			redux: false,
			rails: true,
			ruby: true,
			js: true,
			pg: true,
			html: true,
			css: true,
			firebase: false,
		},
		desc:
			"Designed as an homage to late 80's/early 90's drum machines, Drumblr is a digital drum machine users can play in the browser, with customizable tempo, rhythms, and presets.",
	},
	p2: {
		img:
			"https://github.com/ryan-seit/ryan-site/blob/master/public/BurgerBuilder.png?raw=true",
		title: "Burger Builder",
		links: {
			github: "https://github.com/ryan-seit/burger-builder",
			medium: "",
			web: "",
		},
		tech: {
			react: true,
			redux: true,
			rails: false,
			ruby: false,
			js: true,
			pg: false,
			html: true,
			css: true,
			firebase: true,
		},
		desc:
			"Responsive POS application allowing customers to customize ingredients and place orders",
	},
	p3: {
		img:
			"https://github.com/ryan-seit/ryan-site/blob/master/public/eCommify.png?raw=true",
		title: "eCommify",
		links: {
			github: "https://github.com/ryan-seit/ecommify-frontend",
			medium: "",
			web: "",
		},
		tech: {
			react: true,
			redux: true,
			rails: true,
			ruby: true,
			js: true,
			pg: true,
			html: true,
			css: true,
			firebase: false,
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

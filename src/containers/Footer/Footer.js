import React from "react";

import classes from "./Footer.module.css";

import LOGO from "../UI/Logo/LOGO";
import LINKEDIN from "../UI/Icons/LINKEDIN";
import MEDIUM from "../UI/Icons/MEDIUM";
import GITHUB from "../UI/Icons/GITHUB";
import EMAIL from "../UI/Icons/EMAIL";

const Footer = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Footer}>
				<div className={classes.Logo}>
					<LOGO />
				</div>

				<div className={classes.Line}></div>

				<div className={classes.Links}>
					<ul>
						<li>
							<a href={"mailto:ryan@ryanseit.com"}>
								<EMAIL />
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/ryan-seit/'>
								<LINKEDIN />
							</a>
						</li>
						<li>
							<a href='https://medium.com/@ryan_49675'>
								<MEDIUM />
							</a>
						</li>
						<li>
							<a href='https://github.com/ryan-seit'>
								<GITHUB />
							</a>
						</li>
					</ul>
				</div>

				<p>© Ryan Seit 2020</p>
			</div>
		</div>
	);
};

export default Footer;

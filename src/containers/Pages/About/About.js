import React from "react";

import classes from "./About.module.css";
import headshot from "../../assets/Images/RyanSeit.png";

const About = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.About}>
				<div className={classes.Section1}>
					<h3>Section 1</h3>
					<p>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est.
					</p>
				</div>
				<div className={classes.Section2}>
					<h3>Section 2</h3>
					<p>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est.
					</p>
				</div>
				<div className={classes.Section3}>
					<h3>Section 3</h3>
					<p>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est.
					</p>
				</div>
				<div className={classes.Section4}>
					<h3>Section 4</h3>
					<p>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est.
					</p>
				</div>
				<div className={classes.Headshot}>
					<img src={headshot} alt='Ryan Seit Headshot' />
				</div>
			</div>
		</div>
	);
};

export default About;

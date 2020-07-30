import React from "react";

import classes from "./About.module.css";
import LazyImgLoader from "../../hoc/LazyImgLoader/LazyImgLoader";

const About = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.About}>
				<div className={classes.Headshot}>
					<LazyImgLoader
						className='lazyimg'
						aspectRatio={16 / 16}
						lqip='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAYGBgYGBgoGBgoPCgoKDxQPDw8PFBkUFBQUFBkeGRkZGRkZHh4eHh4eHh4kJCQkJCQqKioqKi8vLy8vLy8vLy//2wBDAQcICAwLDBULCxUyIhwiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAeAB4DASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAABwYCAwQI/8QAKBAAAgEDAwQBBAMAAAAAAAAAAQIDBAURABIhBhMxURQiQWGRMnGB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMAAf/EABsRAAICAwEAAAAAAAAAAAAAAAACAREDEiFB/9oADAMBAAIRAxEAPwBhKAAk/bR3dqTqy7xi4WxamOmIDp2ShBX8j+RPvSVMqmFw3A2nP61wW2q+JTLZbdc4nlICoHCkxhV5XAIOPyfGg80XxLdkh03cKqslqLVWJIJoFVo2kGCwIJ2kefscEjn96sKOsBj86Namiu0fVovU8oaOljYMRwGkbgAD0OSfyOPvjtp7wIspnxrJPA5FqSjvnWnTdgbsXSqUSkZ7SAvJg+1XJA/vRtFW3evsEctnt8MlMc/HnkKARBSQGdjyHUcEc4PvXn4u0hZ3JZnJZiTkknySTySfZ1mJpjTmkLt2Sd3b3HZu97c7Sf8AM6oyWFH1HW19UW2qRrP8pZqmEtmXP0TMxLNsJ84JwD4OONaWZu6wPBGgtdyPvQkNnOdWtm6lnKmlrVM3bH0tnDY8YzruvgZm+n//2Q=='
						src='https://github.com/ryan-seit/ryan-site/blob/master/public/RyanSeitHeadshot.jpg?raw=true'
						alt='Ryan Seit Headshot'
					/>
				</div>
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
			</div>
		</div>
	);
};

export default About;

import React from "react";

const EXIT = props => {
	return (
		<div onClick={props.clicked}>
			<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M48 4.83429L43.1657 0L24 19.1657L4.83429 0L0 4.83429L19.1657 24L0 43.1657L4.83429 48L24 28.8343L43.1657 48L48 43.1657L28.8343 24L48 4.83429Z'
					fill='white'
				/>
			</svg>
		</div>
	);
};

export default EXIT;

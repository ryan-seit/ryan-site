import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Landing from "./containers/Pages/Landing/Landing";
import Technology from "./containers/Pages/Technology/Technology";
import Music from "./containers/Pages/Music/Music";
import About from "./containers/About/About";
import Resume from "./containers/Resume/Resume";

const App = () => {
	return (
		<div className='App'>
			<Layout>
				<Switch>
					<Route path='/technology' component={Technology} />
					<Route path='/music' component={Music} />
					<Route path='/resume' component={Resume} />
					<Route path='/about' component={About} />
					<Route path='/' exact component={Landing} />
				</Switch>
			</Layout>
		</div>
	);
};

export default App;

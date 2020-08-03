import React, { useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import ReactGA from "react-ga";

import Layout from "./containers/Layout/Layout";
import Landing from "./containers/Pages/Landing/Landing";
import Technology from "./containers/Pages/Technology/Technology";
import Music from "./containers/Pages/Music/Music";
// import About from "./containers/Pages/About/About";
import Resume from "./containers/Pages/Resume/Resume";

ReactGA.initialize("UA-174138511-1");

const App = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<HashRouter basename='/'>
			<div className='App'>
				<Switch>
					<Route path='/' exact component={Landing}>
						<Landing />
					</Route>
					<Layout>
						<Route path='/technology' component={Technology} />
						<Route path='/music' component={Music} />
						<Route path='/resume' component={Resume} />
						{/* <Route path='/about' component={About} /> */}
					</Layout>
				</Switch>
			</div>
		</HashRouter>
	);
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"
import Child from './Child';

class App01 extends Component {
	render() {
		return (
			<Router>
				<header class="header">
					<ul>
						<li>
							<Link to="/1"> Param = 1 </Link>
						</li>
						<li>
							<Link to="/2"> Param = 2 </Link>
						</li>
						<li>
							<Link to="/3"> Param = 3 </Link>
						</li>
					</ul>
				</header>
				<div className="App">
					<Switch>
						<Route path="/:id" component={ Child } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App01;
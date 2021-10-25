import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Details from './Delails';
import "./App01.css"

class App01 extends Component {
	render() {
		return (
			<Router>
				<header class="header">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/details">
								Details
							</Link>
						</li>
						<li>
							<Link to="/details/1">
								Details/1
							</Link>
						</li>
						<li>
							<Link to="/details/2">
								Details/2
							</Link>
						</li>
					</ul>
				</header>
				<div className="App">
					<Switch>
						<Route exact path="/details" component={ Details } />
						<Route exact path="/details/:id" component={ Details } />
						<Route exact path="/about" component={ About } />
						<Route exact path="/" component={ Home } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App01;
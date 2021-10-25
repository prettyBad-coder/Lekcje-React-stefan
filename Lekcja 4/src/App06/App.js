import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Students from "./Students";

class App extends Component {

	render() {
		return (
			<Router>
				<header className="header">
					<ul>
						<li>
							<Link to="/">
								All students
							</Link>
						</li>
						<li>
							<Link to="/man">
								Man
							</Link>
						</li>
						<li>
							<Link to="/woman">
								Woman
							</Link>
						</li>
					</ul>
				</header>

				<div className="App">
					<Switch>
						<Route path="/man" component={ () => <Students sex="man" /> } />
						<Route path="/woman" component={ () => <Students sex="woman" /> } />
						<Route path="/" component={ () => <Students sex="all" /> } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
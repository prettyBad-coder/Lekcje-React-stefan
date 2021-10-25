import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Child from '../App03/Child';
// import Links from './Links';
import "./App.css"

class App01 extends Component {

	render() {
		let linksTab = [];
		
		for ( let i = 0; i < 50; i++ ) {
			linksTab.push(
				<li>
					<Link to={ `/${ i }` }>
						Params = { i }
					</Link>
				</li>
			);
		}

		return (
			<Router>
				<header class="header">
					<ul>
						{ linksTab }
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
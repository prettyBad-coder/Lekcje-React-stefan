import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"
import Child from './Child';

class App01 extends Component {

	render() {

		return (
			<Router>
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
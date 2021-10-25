import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"
import Divs from './Divs';

class App extends Component {

	render() {
		let mainArr = [7, 3, 5, 6, 10, 20, 2, 1, 11];

		let linksArr = mainArr.map((element, index) => {
			return (
				<li>
					<Link to={ `/divs/${ element }` }>
						param = { element }
					</Link>
				</li>
			)
		})

		console.log(linksArr)


		return (
			<Router>
				<header className="header">
					<ul>
						{ linksArr }
					</ul>
				</header>

				<div className="App">
					<Switch>
						<Route path="/divs/:id" component={ Divs } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
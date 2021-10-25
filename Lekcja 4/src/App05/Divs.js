import React, { Component } from 'react';
import Div from './Div';

class Divs extends Component {

	render() {
		let divsArr = [];
		for (let i = 0; i < this.props.match.params.id; i++) {
			divsArr.push(
				<Div id={ i } />
			)
		}

		return (
			<>
				<div className="text--big">
					DIVS
				</div>
				<div className="divs-wrapper">
					{ divsArr }
				</div>
			</>
		);
	}
}

export default Divs;
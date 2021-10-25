import React, { Component } from 'react';
import Button from './Button';

class Child extends Component {
	render() {
		let buttonsArr = [];
		for (let i = 0; i < this.props.match.params.id; i++) {
			buttonsArr.push(
				<Button id={ i } />
			)
		}
		return (
			<>
				<div className="text--big">
					BUTTONS
				</div>
				<div className="buttons-wrapper">
					{ buttonsArr }
				</div>
			</>
		);
	}
}

export default Child;
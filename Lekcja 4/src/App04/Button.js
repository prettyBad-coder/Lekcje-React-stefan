import React, { Component } from 'react';

class Buttons extends Component {

	myClick = () => {
		alert(`This is button ${ this.props.id }`)
	}

	render() {
		return (
			<button onClick={ this.myClick }>
				button - { this.props.id }
			</button>
		);
	}
}

export default Buttons;
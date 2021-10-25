import React, { Component } from 'react';

class Child extends Component {
	render() {
		return (
			<>
				Child page - params: { this.props.match.params.id }	
			</>
		);
	}
}

export default Child;
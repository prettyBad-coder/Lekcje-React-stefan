import React, { Component } from 'react';

class Child extends Component {
	render() {
		return (
			<>
				Params: { this.props.match.params.id }
			</>
		);
	}
}

export default Child;
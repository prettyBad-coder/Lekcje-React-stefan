import React, { Component } from 'react';

class Div extends Component {
	constructor(props) {
		super(props);

		this.state = {
			num: this.props.id,
		}
	}
	
	myClick = () => {
		let num = this.state.num;
		num++;
		this.setState({num: num});
	}

	render() {
		return (
			<div className="box" onClick={ this.myClick }>
				{ this.state.num }
			</div>
		);
	}
}

export default Div;
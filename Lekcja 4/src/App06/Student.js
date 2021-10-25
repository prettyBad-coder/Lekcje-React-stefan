import React, { Component } from 'react';

class Student extends Component {

	myClick = () => this.props.getTheID(this.props.id);

	render() {
		return (
			<div className="student-box">
				<div className="box student-box-left">
					{ this.props.name }
				</div>
				<div className="box student-box-right" onClick={ this.myClick }>
					zobacz oceny { this.props.id }
				</div>
			</div>
		);
	}
}

export default Student;
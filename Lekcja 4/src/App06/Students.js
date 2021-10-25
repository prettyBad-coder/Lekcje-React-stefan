import React, { Component } from 'react';
import students from "./students.json";
import Student from './Student';
import Exams from './Exams';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStudentid: 0,
		}
	}
	

	studentClick = (id) => this.setState({currentStudentid: id});

	render() {
		let studentsBoxesArr = [];

		students.forEach((student, index) => {
			let name = student.name;
			let nameArr = name.split(' ');
			let sex = nameArr[0].endsWith('a') ? 'woman' : 'man'
			if (this.props.sex === 'woman' && sex === 'woman') studentsBoxesArr.push( <Student getTheID={ this.studentClick } name={ student.name } id={ student._id } /> );
			else if (this.props.sex === 'man' && sex === 'man') studentsBoxesArr.push( <Student getTheID={ this.studentClick } name={ student.name } id={ student._id } /> );
			else if (this.props.sex === 'all') studentsBoxesArr.push( <Student getTheID={ this.studentClick } name={ student.name } id={ student._id } /> );
		})
		return (
			<div className="App">
				<div className="students-wrapper">
					{ studentsBoxesArr }
				</div>
				<Exams studentID={ this.state.currentStudentid } />
			</div>
		);
	}
}

export default Students;
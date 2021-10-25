import React, { Component } from 'react';
import students from "./students.json";

class Exams extends Component {
	render() {
		
		let name = students[this.props.studentID].name;
		let nameArr = name.split(' ');
		let sex = nameArr[0].endsWith('a') ? 'WOMAN' : 'MAN'
		
		return (
			<div className="exam-box">
					<div className="face text-big">
						{ sex }
					</div>
					<div className="details">
						<div className="text"> Name: <span> { students[this.props.studentID].name } </span></div>
						<div className="text"> Exam: <span> { students[this.props.studentID].scores[0].score } </span></div>
						<div className="text"> Quiz: <span> { students[this.props.studentID].scores[1].score } </span></div>
						<div className="text"> Homework: <span> { students[this.props.studentID].scores[2].score } </span></div>
						<div className="text"> Homework: <span> { students[this.props.studentID].scores[3].score } </span></div>
					</div>
				</div>
		);
	}
}

export default Exams;
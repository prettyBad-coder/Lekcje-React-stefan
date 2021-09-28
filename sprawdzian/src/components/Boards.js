import React, { Component } from 'react';
import data from '../data.json';
import Board from './Board';

class Boards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedColor: 'red',
			savedArr: [],
			savedColor: '',
		}
	}
	
	mySave = (arr, color) => {
		let savedArr = this.state.savedArr;
		savedArr.push(
			<div className="tabelka">
				siema eniu
			</div>
		)
		this.setState({
			savedArr: savedArr,
		})
		console.log(this.state.savedArr)
	}

	myRadio = (event) => {
		this.setState({
			selectedColor: event.target.value,
		})
	}

	render() {
		let tablePattern = [0, 1, 2, 3, 4];

		let boardsArr = [];
		let colorsArr = [];
		data.boards.forEach((element, index) => {
			
			colorsArr.push(
				<div className="text">
					<input type="radio" name="color" onChange={ this.myRadio } value={ data.boards[index].color }/>
					{ data.boards[index].color }
				</div>
			);
			
			boardsArr.push(
				<Board mySave={ this.mySave } tablePattern={ tablePattern[index] } title={ data.boards[index].title } color={ data.boards[index].color } tableColor={ this.state.selectedColor } id={ data.boards[index].id } key={ index }/>
			)

		})

		return (
			<div className="boards">
				<div className="text--big">
					BOARDS
				</div>
				<div className="boards-wrapper">
					<form onSubmit={ this.handleSubmit }>
						{ colorsArr }
					</form>
				</div>
				<div className="boards-wrapper">
					{ boardsArr }
				</div>
				<div className="boards-wrapper border">
					<div className="text--big">
						SAVED
					</div>
					{ this.state.savedArr }
				</div>
			</div>
		);
	}
}

export default Boards;
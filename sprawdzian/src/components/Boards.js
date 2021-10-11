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
		console.log(arr);
		const dupa = [...this.state.savedArr];
		const current = {
			color: color,
			data: arr
		}
		dupa.push(current)
		this.setState({
			savedArr: dupa
		})
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
					{this.state.savedArr.map(element => {
						return (
							<div className="c">
								{JSON.stringify(element.data)}
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default Boards;
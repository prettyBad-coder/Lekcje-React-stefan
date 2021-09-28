import React, { Component } from 'react';
import SimpleBoard from './SimpleBoard';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordsArr: [],
			saveColor: '',
		}
	}
	
	mySave = (arr, color) => {
		this.setState({
			coordsArr: arr,
			saveColor: color,
		});
	};

	handleClick = () => {
		this.props.mySave(this.state.coordsArr, this.state.saveColor);
	}

	render() {
		return (
			<div className="board" style={{ border: `3px solid ${this.props.color}` }}>
				<div className="text"> { this.props.title } </div>
				<div className="text"> { this.props.id } </div>
				<SimpleBoard mySave={ this.mySave } pattern={ this.props.tablePattern } tableColor={ this.props.tableColor }/>
				<button onClick={ this.handleClick }>
					Zapisz
				</button>
			</div>
		);
	}
}

export default Board;
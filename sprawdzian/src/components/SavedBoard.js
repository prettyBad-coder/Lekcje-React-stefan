import React, { Component } from 'react';

class SavedBoard extends Component {
	render() {
		console.log(this.props.color);
		console.log(this.props.arr);
		
		return (
			<div className="tabelka">
				{this.props.arr.map((element, index) => {
					return(
						<div className="box" style={{backgroundColor: element.selected ? 'transparent' : this.props.color}}></div>
					)
				})}
			</div>
		);
	}
}

export default SavedBoard;
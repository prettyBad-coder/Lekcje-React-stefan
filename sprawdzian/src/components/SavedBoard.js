import React, { Component } from 'react';

class SavedBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.index,
		}
	}

	delete = () => {
		this.props.delete(this.state.id);
	}
	
	render() {
		return (
			<div className="column">
				<div className="tabelka">
					{this.props.arr.map((element, index) => {
						return(
							<div className="box" style={{backgroundColor: element.selected ? 'transparent' : this.props.color}}></div>
						)
					})}
				</div>
				<div className="delete-button" onClick={ this.delete }>
					Delete
				</div>
			</div>
		);
	}
}

export default SavedBoard;
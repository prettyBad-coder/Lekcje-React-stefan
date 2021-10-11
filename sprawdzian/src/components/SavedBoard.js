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
			<div className="tabelka tabelka-saved">
				<div className="delete-button" onClick={ this.delete }>
					Delete
				</div>
				{this.props.arr.map((element, index) => {
					return(
						<div className="box box-saved" style={{backgroundColor: element.selected ? 'transparent' : this.props.color}}></div>
					)
				})}
			</div>
		);
	}
}

export default SavedBoard;
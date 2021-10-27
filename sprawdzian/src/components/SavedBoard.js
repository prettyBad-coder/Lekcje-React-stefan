import React, { Component } from 'react';

class SavedBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.index,
			color: '',
			arr: [],
		}
	}

	delete = () => {
		this.props.delete(this.state.id);
	}

	componentDidMount = () => {
		this.setState({ 
			color: this.props.color,
			arr: [...this.props.arr]
		})
	}
	
	render() {
		return (
			<div className="tabelka tabelka-saved">
				<div className="delete-button" onClick={ this.delete }>
					Delete
				</div>
				{
					this.state.arr.map((element, index) => {
						return(
							<div className="box box-saved" style={{backgroundColor: element.selected ? 'transparent' : this.state.color}}></div>
						)
					})
				}
			</div>
		);
	}
}

export default SavedBoard;
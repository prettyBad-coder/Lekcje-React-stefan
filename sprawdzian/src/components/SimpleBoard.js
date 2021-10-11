import React, { Component } from 'react';

class SimpleBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordsTab: [
				[
					{id: 0, selected: false}, 
					{id: 1, selected: true}, 
					{id: 2, selected: false}, 
					{id: 3, selected: false}, 
					{id: 4, selected: true}, 
					{id: 5, selected: false}, 
					{id: 6, selected: false}, 
					{id: 7, selected: false}, 
					{id: 8, selected: false}, 
					{id: 9, selected: true}, 
					{id: 10, selected: true}, 
					{id: 11, selected: false}, 
					{id: 12, selected: true}, 
					{id: 13, selected: true}, 
					{id: 14, selected: false},
				],
				[
					{id: 0, selected: false}, 
					{id: 1, selected: false}, 
					{id: 2, selected: false}, 
					{id: 3, selected: true}, 
					{id: 4, selected: false}, 
					{id: 5, selected: true}, 
					{id: 6, selected: true}, 
					{id: 7, selected: false}, 
					{id: 8, selected: true}, 
					{id: 9, selected: true}, 
					{id: 10, selected: false}, 
					{id: 11, selected: true}, 
					{id: 12, selected: false}, 
					{id: 13, selected: false}, 
					{id: 14, selected: false},
				],
				[
					{id: 0, selected: true}, 
					{id: 1, selected: true}, 
					{id: 2, selected: true}, 
					{id: 3, selected: true}, 
					{id: 4, selected: true}, 
					{id: 5, selected: true}, 
					{id: 6, selected: false}, 
					{id: 7, selected: false}, 
					{id: 8, selected: true}, 
					{id: 9, selected: false}, 
					{id: 10, selected: true}, 
					{id: 11, selected: false}, 
					{id: 12, selected: false}, 
					{id: 13, selected: false}, 
					{id: 14, selected: false},
				],
				[
					{id: 0, selected: true}, 
					{id: 1, selected: true}, 
					{id: 2, selected: false}, 
					{id: 3, selected: true}, 
					{id: 4, selected: false}, 
					{id: 5, selected: false}, 
					{id: 6, selected: false}, 
					{id: 7, selected: true}, 
					{id: 8, selected: false}, 
					{id: 9, selected: true}, 
					{id: 10, selected: true}, 
					{id: 11, selected: false}, 
					{id: 12, selected: true}, 
					{id: 13, selected: true}, 
					{id: 14, selected: false},
				],
				[
					{id: 0, selected: true}, 
					{id: 1, selected: false}, 
					{id: 2, selected: true}, 
					{id: 3, selected: true}, 
					{id: 4, selected: false}, 
					{id: 5, selected: true}, 
					{id: 6, selected: true}, 
					{id: 7, selected: false}, 
					{id: 8, selected: true}, 
					{id: 9, selected: true}, 
					{id: 10, selected: true}, 
					{id: 11, selected: true}, 
					{id: 12, selected: true}, 
					{id: 13, selected: false}, 
					{id: 14, selected: true},
				],
			],
		}
	}

	componentDidMount() {
		this.props.mySave(this.state.coordsTab[this.props.pattern], this.props.tableColor);
	}

	componentDidUpdate(prevProps) {
		if(this.props.tableColor != prevProps.tableColor) 
			this.props.mySave(this.state.coordsTab[this.props.pattern], this.props.tableColor);
	}

	boxClick = (data) => {
		let tab = this.state.coordsTab;
		tab[this.props.pattern][data.target.id].selected = !tab[this.props.pattern][data.target.id].selected;
		this.setState({coordsTab: tab}); 
		this.props.mySave(this.state.coordsTab[this.props.pattern], this.props.tableColor);
	}

	render() {
		let table = [];
		this.state.coordsTab[this.props.pattern].forEach((element) => {
			table.push(<div onClick={ this.boxClick } id={ element.id } className="box" style={{backgroundColor: element.selected ? 'transparent' : this.props.tableColor}}></div>);
		})
		return (
			<div className="tabelka">
				{ table }
			</div>
		);
	}
}

export default SimpleBoard;
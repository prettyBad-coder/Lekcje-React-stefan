import React from 'react';
import './Button.css';

class Button extends React.Component {
 
	myClick = () => {
		alert('clicked!');
	}

	render() {
	    return (
			<div className="box">
				BUTTON COMPONENT
				<button onClick={ this.myClick }>
					Klik
				</button>
			</div>
	    );
  }
}

export default Button;
import React from 'react';

import Button from './Button';
import "./App.css";

class App extends React.Component {
  render() {
    return (
		<div className="App">
			<Button/>
			<Button/>
			<Button/>
		</div>
    );
  }
}
export default App;
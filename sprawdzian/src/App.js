import './style/App.css';
import Boards from './components/Boards';

function App() {
  return (
    <div className="App">
		<div className="text--big" style={{marginBottom: '20px'}}>
			APP
		</div>
        <Boards/>
    </div>
  );
}

export default App;

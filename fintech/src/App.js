import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StateAndEvent from './components/StateAndEvent';
import ArrayMap from './components/ArrayMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StateAndEvent></StateAndEvent> */}
        <ArrayMap></ArrayMap>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StateAndEvent from './components/StateAndEvent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome username="유관우" age="33"></Welcome>
        <StateAndEvent></StateAndEvent>
      </header>
    </div>
  );
}

export default App;

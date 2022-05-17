import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome username="유관우" age="33"></Welcome>
        <Welcome username="유장비" age="32"></Welcome>
        <Welcome username="유비" age="34"></Welcome>
      </header>
    </div>
  );
}

export default App;

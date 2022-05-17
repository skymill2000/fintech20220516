import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome username="유관우" age="33"></Welcome>
      </header>
    </div>
  );
}

export default App;

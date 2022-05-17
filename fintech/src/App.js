import logo from './logo.svg';
import './App.css';

const element = <h1>hello</h1>;

const Welcome = ({username, age}) =>{
  console.log(username, age);
  return <h2>안녕하세요 {username}님 나이는 {age}세 입니다</h2>
}

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

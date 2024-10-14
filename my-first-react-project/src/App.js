import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>form</p>
      <label for="user">User:</label>
      <input type="text" id="user"></input><br></br>
      <label for="password">password:</label>
      <input type="text" id="password"></input><br></br>
      <button>Login</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Product Description:
        </p>
        <form onSubmit={attemptLogin}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username' onChange={(e) => setUsername(e.target.value)}></input>
            <br></br>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
          <button type="submit">
            Login
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;

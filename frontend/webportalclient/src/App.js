import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Orders from "./Orders";
import Product from "./Product";
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const attemptLogin = async(event) =>{
    event.preventDefault(); // Prevents the form from submitting and reloading the page
  
    try{
      const serverResponse = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
        credentials: 'include' // Allows CORS to work properly on the server
      });
      const data = await serverResponse.json();  // Use .text() if it's a string like 'admin'
      if(data.success){
        dispatch(setUser({name: data.name, userId: data.userId}));
        console.log(data.userId);
        navigate('/orders');
      }
      else{
        alert('Login unsuccessful. Please try again!');
      }
    }
    catch(error){
      alert(error);
    }
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the portal. Please login to continue.
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

function App(){
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

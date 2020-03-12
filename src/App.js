import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import styled from 'styled-components'
import Items from "./Components/Items"

const Button = styled.button`
  display: flex;
  align-content:center;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 1.5em 1em;
  padding: 0.25em 1em;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Link to = "/login">
        <Button>Register/Login</Button>
      </Link>
      <Items />
     
    
      <Route exact path = "/login" component={LoginForm} />
    </div>
  );
}

export default App;

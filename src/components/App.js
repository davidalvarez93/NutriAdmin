import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import SignUpPage from './SignUp';
//import Welcome from './';
import SignInPage from './SignIn';

const App = () =>
  <Router>
    <Navigation />
  </Router>

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */

export default App;

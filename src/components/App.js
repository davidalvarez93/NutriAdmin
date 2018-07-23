import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import SignUpPage from './SignUp';
import loginforms from './loginforms';
import welcomeforms from './welcomeforms';
import SignInPage from './SignIn';
/*
const App = () =>
  <Router>
    <Navigation />
  </Router>*/

 class App extends Component {

  render() {
    return (
   <Router>
   <div>
   <Navigation />
   </div>
 </Router>
    );
  }
 } 

export default App;

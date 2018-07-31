import propTypes from 'prop-types';

import React, { Component } from 'react';

import NavbarWhenLogged from './components/MisComponentes/NavbarWhenLogged';
import PageFooter from './components/MisComponentes/Footer';
import Content from './components/MisComponentes/Content';
=======
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Input, Icon, Button, Footer, Navbar, NavItem, Dropdown } from 'react-materialize';
import NavbarWhenLogged from './components/MisComponentes/NavbarWhenLogged';
import PageFooter from './components/MisComponentes/Footer';
import Content from './components/MisComponentes/Content';
import Navigation from './components/MisComponentes/Navigation';
import loginforms from "./components/MisComponentes/loginforms";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';






class App extends Component {


  static propTypes ={
    children: propTypes.object.isRequired
  };


    render() {
      const { children } = this.props;
        return (
          [
            <header>
              <NavbarWhenLogged/>
            </header>,
            <main>
              <Content  body={children} />
            </main>,
            <footer>
              <PageFooter/>
            </footer>
          ]
        )
    }
}


export default App;


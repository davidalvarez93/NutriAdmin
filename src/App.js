import propTypes from 'prop-types';

import React, { Component } from 'react';
import NavbarWhenLogged from './components/MisComponentes/NavbarWhenLogged';
import PageFooter from './components/MisComponentes/Footer';
import Content from './components/MisComponentes/Content';

import './App.css';


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


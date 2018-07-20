import React, { Component } from 'react'
import { table } from 'react-materialize'
//import Navigation from './Navigation';

export default class Welcome extends Component {
    render() {
      return (
        <div className = "Welcome">
            <header className="Welcome-header">
                <h1 className="Welcome-title">Welcome to React</h1>
            </header>
        </div>
      )
    }
}

//export default Welcome;
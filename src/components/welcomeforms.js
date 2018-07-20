import React, { Component } from 'react'
import { table } from 'react-materialize'

export default class Welcome extends Component {
    render() {
      return (
        <div className = "Welcome">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        </div>
      )
    }
}

export default Welcome;
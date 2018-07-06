import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar brand='Journeys' right className='blue darken-4'>
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
            </div>
        )
    }
}

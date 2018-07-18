import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar brand='Journeys' left className='blue'>
                    <NavItem onClick={() => console.log('test click')}>start</NavItem>
                   
                </Navbar>
            </div>
        )
    }
}

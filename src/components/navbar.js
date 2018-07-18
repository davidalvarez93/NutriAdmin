import React, { Component } from 'react'
import { Navbar, NavItem, Button, Dropdown } from 'react-materialize'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar brand='Journeys' left className='blue'>
                    <Dropdown trigger={
                        <Button ><a class="btn-floating pulse blue"><i class="material-icons">menu</i></a></Button>
                    }>
                        <NavItem>Aeropuerto</NavItem>
                        <NavItem>Vuelos</NavItem>
                        <NavItem divider />
                        <NavItem>Cerrar Sesion</NavItem>
                    </Dropdown>

                </Navbar>
            </div>
        )
    }
}

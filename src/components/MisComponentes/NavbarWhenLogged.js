import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize'
import {Link} from 'react-router-dom';

import './estilos.css'


class NavbarWhenLogged extends Component{
    render(){
        return(
            <div className="">
                <Navbar className="light-blue darken-3">

                    <div className="row center">
                        <div  className="col s3 ">
                            <Dropdown   trigger={
                                <div>
                                    <i className="material-icons large ">menu</i>
                                </div>
                            }>
                            <Link className="light-blue darken-3 valign-wrapper" to="/Airports">Aeropuertos</Link>
                            <Link className="light-blue darken-3 valign-wrapper" to="/Vuelos">Vuelos</Link>
                            <NavItem divider />
                            <Link className="light-blue darken-3 valign-wrapper" to="/">Cerrar Sesion</Link>
                            </Dropdown>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavbarWhenLogged;
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
                            <Link className="light-blue darken-3 valign-wrapper" to="/PageDos">Vuelos</Link>
                            <NavItem divider />
                            <Link className="light-blue darken-3 valign-wrapper" to="/PageTres">Cerrar Sesion</Link>
                            </Dropdown>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavbarWhenLogged;



/*
<div>
<nav className="MiHeaderWhenLogged">
    <div className="  nav-wrapper light-blue darken-3">
        <ul className="left hide-on-med-and-down">
        <li><Link className=" MiHeaderWhenLogged  valign-wrapper" to="/"><i className="material-icons left">home</i>Home</Link></li>
        <li><Link className=" MiHeaderWhenLogged valign-wrapper" to="/Airports"><i className="material-icons left">flight_land</i>Aeropuertos</Link></li>
        <li><Link className=" MiHeaderWhenLogged valign-wrapper" to="/PageDos"><i className="material-icons left">flight</i>Vuelos</Link></li>
        </ul>
        <ul className="right hide-on-med-and-down">
            <li><Link className=" MiHeaderWhenLogged valign-wrapper" to="/PageTres"><i className="material-icons left">account_circle</i>Log Out</Link></li>
        </ul>
    </div>
</nav>
</div>*/
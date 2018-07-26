import React, { Component, Modal } from 'react'

import { Navbar, NavItem, Button, Dropdown } from 'react-materialize'


export default class Nav extends Component {

   render() {

       return (

           <div>

               <Navbar brand='Journeys' left className='blue'>

                   <Dropdown trigger={

                       <Button floating waves='light' className='blue'><i class="material-icons">dehaze</i></Button>

                   }>

                       <NavItem>Aeropuerto</NavItem>

                       <NavItem>Vuelos</NavItem>

                       <NavItem divider />

                       <NavItem>Cerrar Sesion</NavItem>

                   </Dropdown>                </Navbar>


                   <div>

</div>

           </div>

           

       )

   }

}
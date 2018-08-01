import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './estilos.css'

class PageFooter extends Component{
    render(){
        return(
        <nav className=" light-blue darken-3 " >
          <div className="  nav-wrapper"> 

            <ul  className=" right ">
            <li><Link  to="/Page404"><p className="MiFooter valign-wrapper">Aviso</p></Link></li>
            <li><Link  to="/Page404"><p className="MiFooter valign-wrapper">Privacidad</p></Link></li>
            <li><Link  to="/Page404"><p className="MiFooter valign-wrapper">Terminos y condiciones</p></Link></li>
            </ul>

           
            <ul  className="valign-wrapper  ">
            <li><Link  to="/"><p className="MiFooter valign-wrapper">Journeys</p></Link></li>
            </ul>
           

          </div>
        </nav>
        )
    }
}

export default PageFooter;


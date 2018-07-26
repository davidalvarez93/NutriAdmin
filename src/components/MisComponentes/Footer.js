import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import { Footer } from 'react-materialize';

import './estilos.css'

class PageFooter extends Component{
    render(){
        return(
        <nav className=" light-blue darken-3 " >
          <div className="  nav-wrapper"> 

            <ul  className=" right ">
            <li><Link  
          to="/PageUno"><p className="MiFooter valign-wrapper">Aviso</p></Link></li>
            <li><Link  to="/PageDos"><p className="MiFooter valign-wrapper">Privacidad</p></Link></li>
            <li><Link  to="/PageTres"><p className="MiFooter valign-wrapper">Terminos y condiciones</p></Link></li>
            </ul>

           
            <ul  className="valign-wrapper  ">
            <li><Link  to="/"><p className="MiFooter valign-wrapper">Journeys</p></Link></li>
            </ul>
           

          </div>
        </nav>

        /*
        <footer class="page-footer">


        <div class="footer-copyright">
          <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>*/

        )
    }
}

export default PageFooter;


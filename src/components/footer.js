import React from 'react'
import {Footer} from 'react-materialize'

export default () => {
  return (
    <div>
      <Footer copyrights="&2018 ArkusNexus" 
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
  }
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Avisos</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Privacidad</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Contacto</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Provedor</a></li>
    </ul>
  }
  brand='Journeys' right className='blue darken-4'
>
    <h5 className="white-text">Journeys</h5>
    <p className="grey-text text-lighten-4">Sueña, realiza, disfruta.</p>
</Footer>;
    </div>
  )
}

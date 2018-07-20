import React from 'react'
import {Footer} from 'react-materialize'

export default () => {
  return (
    <div>
      <Footer copyrights="©2018 Journeys.com"
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Avisos</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Privacidad</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Terminos y Condiciones</a></li>
    </ul>
  }
  brand='Journeys' right className='blue'
>
    <h5 className="white-text">Journeys</h5>
    <p className="grey-text text-lighten-4">Donde quieras, Cuando quieras, Como quieras.</p>
</Footer>;
    </div>
  )
}

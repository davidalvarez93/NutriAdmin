import React, { Component } from 'react'
import { Row, Col, Input, Icon, Carousel } from 'react-materialize'
import Register from './register'
import './hola.css'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={6} className='grid-example dunno center valign-wrapper' ><Carousel options={{ fullWidth: true }}  images={[
                        'http://2.bp.blogspot.com/-z2rFO7bvlQM/U0IQMtbpxRI/AAAAAAAAJV8/5u2OawXEIkY/s00/puerto-plata-destino-turistico-de-republica-dominicana.jpg',
                        'http://cde.peru21.pe/ima/0/0/1/7/1/171591.jpg',
                        'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-710/a_sidne-a.jpg',
                        'https://vuelosbaratosbaratos.com/wp-content/uploads/2017/08/lugares-m%C3%A1s-tur%C3%ADsticos-de-Europa-4.jpg',
                        'http://yeraygonzalez.es/wp-content/uploads/2015/08/promocionar-destinos-turisticos-marketing.jpg'
                    ]} />
                    </Col>


                    <Col s={6} className='grid-example center'>
                        <h1>Login</h1>
                        <Row>
                            <Input s={12} label="Email or user" validate><Icon>account_circle</Icon></Input>
                        </Row>

                        <Row>
                            <Input s={12} type="password" class="validate" label="Password" validate><Icon>lock</Icon></Input>
                        </Row>

                        <Row>
                            <Col m={6}>
                                <a className="waves-effect waves-light btn blue darken-3">Login</a>
                            </Col>
                            <Col m={6}>
                            <a data-target="modalregister" className="waves-effect waves-light btn blue darken-3">Register</a>
                                <Register id='modalregister' />
                            </Col>
                        </Row>

                        <Row>
                            <div>

                            </div>
                        </Row>
                    </Col>

                </Row>



            </div>
        )
    }
}

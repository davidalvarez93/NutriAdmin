import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';





export default class Welcome extends Component {


    render(){

        return (
            <div>
                  <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col  s={12} m={12} className='center'>
                      <img src={require('../images/grafica2.jpg')} width="800" height="500" />
                    </Col>
                  </Row>
               
            </div>

        );
    }
};
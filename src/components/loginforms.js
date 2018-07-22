import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button } from 'react-materialize';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                        <Input type="email" label="Email"  s={12} validate><Icon>account_circle</Icon></Input>
                        <Input type="password" label="password" s={12} validate><Icon>lock</Icon></Input>
                        <Row>
                        <Col  s={12} m={12} className='center'>
                        <Button className='waves-effect waves-light btn blue'>Login </Button>
                        </Col>
                        
                        </Row>

                    </Col>
                </Row>
            </div>
        )
    }
}

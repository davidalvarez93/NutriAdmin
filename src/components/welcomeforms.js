import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button } from 'react-materialize';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default class WelcomeHome extends Component {

    render() {
        return (
            <div>
                  <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                        <img src={require('../images/logo.svg')} alt="Test" />
                        </Col>
                </Row>

            </div>
        );
    }
};


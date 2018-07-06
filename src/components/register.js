import React, { Component } from 'react'
import { Modal, Row, Col, Input, Icon } from 'react-materialize'

export default class Register extends Component {
    render() {
        return (
            <div>
                <Modal
                    id='modalregister'
                    header='Example'
                >

                    <Row>
                        <Col s={6} className='grid-example center'>

                            <Row>
                                <Input s={12} label="Email" validate><Icon>mail</Icon></Input>
                            </Row>

                            <Row>
                                <Input s={12} label="Name" validate><Icon>edit</Icon></Input>
                            </Row>

                            <Row>
                                <Input s={12} label="Last name" validate><Icon>edit</Icon></Input>
                            </Row>

                            <Row>
                                <Input s={12} label="Username" validate><Icon>account_circle</Icon></Input>
                            </Row>

                        </Col>

                        <Col s={6} className='grid-example center'>

                            <Row>
                                <Input s={12} label="Phone" validate><Icon>local_phone</Icon></Input>
                            </Row>

                            <Row>
                                <Input s={12} label="Password" validate><Icon>lock</Icon></Input>
                            </Row>

                            <Row>
                                <Input s={12} label="Confirm password" validate><Icon>lock</Icon></Input>
                            </Row>

                            <div>
                            <a className="waves-effect waves-light btn blue darken-3">Register</a>
                            
                        </div>

                        </Col>

                    </Row>


                </Modal>
            </div>
        )
    }
}

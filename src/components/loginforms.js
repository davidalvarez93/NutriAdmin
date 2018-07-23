import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button } from 'react-materialize';
import Navigation from './Navigation';
import welcomeforms from './welcomeforms';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

export default class Login extends Component {
    
    state={
        name:'peter'
    }
    constructor(){
        super();
        this.state = {
            name:'jhon'
        };
    }
    
    state = {
        loggedIn:true
      }
      loginHandle = () => {
        this.setState(prevState => ({
         loggedIn: !prevState.loggedIn  
        }))
}
    componentWillUnmount() {
        console.log('Will Unmount');
      }

      unmountChild(){
          this.setState({name:'robert'});
      }

    render(){
       console.log('render');
        if(this.state.name=='robert'){
            return(<div/>)
        }
        return (

          
            
            <Router>
            <div>
            
            
              <Route exact path="/welcomeforms"
              component={welcomeforms}/>
              

                           
                <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                        <Input type="email" label="Email"  s={12} validate><Icon>account_circle</Icon></Input>
                        <Input type="password" label="password" s={12} validate><Icon>lock</Icon></Input>
                        <Row>
                        <Col  s={12} m={12} className='center'>

                        <Link to="/welcomeforms">
                        <Button onClick={this.unmountChild.bind(this)}
                        className='waves-effect waves-light btn blue'>Login</Button>
                        </Link>
    
                        </Col>
                        
                        </Row>

                    </Col>
                </Row>

                             
            </div>
          </Router>
            
        );
    }

};

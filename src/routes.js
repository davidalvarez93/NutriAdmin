//dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes
import App from './App';
import Airports from './components/MisComponentes/Airports';
import Vuelos from './components/MisComponentes/Vuelos'
import Page404 from './components/MisComponentes/Page404';

import loginforms from './components/MisComponentes/loginforms';
import welcomeforms from './components/MisComponentes/welcomeforms';
import Footer from './components/MisComponentes/Footer';
import Navigation from './components/MisComponentes/Navigation';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Airports" component={Airports}/>
            <Route exact path="/Vuelos" component={Vuelos}/>
            <Route exact path="/Page404" component={Page404}/>

            <Route exact path="/Footer" component={Footer}/>
            <Route exact path="/" component={Navigation}/>
            <Route exact path="/loginforms" component={loginforms}/>
            <Route exact path="/welcomeforms" component={welcomeforms}/>
            <Route  component={Page404}/>

        </Switch>
    </App>;

export default AppRoutes;
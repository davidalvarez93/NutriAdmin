//dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes
import App from './App';
import Airports from './components/MisComponentes/Airports';
import ADos from './components/MisComponentes/ADos';
import ATres from './components/MisComponentes/ATres';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Airports" component={Airports}/>
            <Route exact path="/PageDos" component={ADos}/>
            <Route exact path="/PageTres" component={ATres}/>
        </Switch>
    </App>;

export default AppRoutes;
//dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes
import App from './App';
//import AUno from './components/AUno';
import Airports from './components/MisComponentes/Airports';
import ADos from './components/MisComponentes/ADos';
import ATres from './components/MisComponentes/ATres';

/*import Page404 from './components/Page404'

import Navigation from './components/Navigation';
import Footer from './components/Navigation';
*/

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Airports" component={Airports}/>
            <Route exact path="/PageDos" component={ADos}/>
            <Route exact path="/PageTres" component={ATres}/>
            
        </Switch>
    </App>;

export default AppRoutes;
//dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes
import App from './App';
import Airports from './components/MisComponentes/Airports';
import Page404 from './components/MisComponentes/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Airports" component={Airports}/>
            <Route exact path="/Page404" component={Page404}/>
            <Route exact path="/Page404" component={Page404}/>
        </Switch>
    </App>;

export default AppRoutes;
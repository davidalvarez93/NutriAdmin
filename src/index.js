

//Dependencias
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './routes';
import Test from './components/MisComponentes/AddAirport'


//Assets
import './index.css'; 


//Dependencias
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './routes';
import Test from './components/MisComponentes/AddAirport'
import registerServiceWorker from './registerServiceWorker';
//import App from './components/App';

//Assets
import './index.css'; 
//ReactDOM.render(<App/>, document.getElementById('app'));

//registerServiceWorker();


render(
    <Router >
    <AppRoutes />
    </Router>, 
    document.getElementById('root'),
);



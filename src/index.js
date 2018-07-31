//Dependencias
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './routes';
import Test from './components/MisComponentes/Test'
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



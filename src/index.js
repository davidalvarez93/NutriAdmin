import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';
//import Test from './components/MisComponentes/Test'

import './index.css'; 

render(
    <Router >
    <AppRoutes />
    </Router>,  
    document.getElementById('root'),
);



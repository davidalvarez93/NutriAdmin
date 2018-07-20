import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/navbar';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/loginforms';
import Footer from './components/footer';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Login />, document.getElementById('lg'));
ReactDOM.render(<Footer/>, document.getElementById('ftr'));
registerServiceWorker();


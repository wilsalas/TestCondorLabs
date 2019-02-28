import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Register from './components/register/Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Config routes app
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route path="/register" component={Register}></Route>
        </div>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();

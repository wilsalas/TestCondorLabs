import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Register from './components/register/Register';
import Home from './components/home/Home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


/*function authenticated app */
const Authenticated = (type, session = localStorage.getItem('fakeAuth')) => {
    return type === 'public' && session !== null ? <Redirect to={'/home'} /> :
           type === 'private' && session === null ? <Redirect to={'/'} /> :
           type === 'compare' ? session : null;
}

/*function logout app */
const Logout = () => {
    if(window.confirm("Are you sure you want to log out?")){
        localStorage.removeItem('fakeAuth');
        window.location.href="/";
    }
}

/*function render components app */
const RouteProvider = ({ component: Component, ...objectPath }) => (
    <Route  {...objectPath} render={props => <Component {...props} fakeAuth={Authenticated} logout={Logout} />} />
);


// Config routes app
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <RouteProvider exact path='/' component={App} />
                <RouteProvider path='/register' component={Register} />
                <RouteProvider path='/home' component={Home} />
                <Route render={() => <Redirect to="/" />} />
            </Switch >
        </div>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();

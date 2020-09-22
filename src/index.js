import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route  } from 'react-router-dom'


import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Detail from './pages/Detail';

const RouterObj = 
<Router>
  <Route exact path="/" component={Login}/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route path="/home" component={Home}/>
  <Route path="/detail/:pid" component={Detail}/>
</Router>

ReactDOM.render( RouterObj, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

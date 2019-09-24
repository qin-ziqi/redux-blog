import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import { createHashHistory, createBrowserHistory } from 'history';

const hashHistory = createHashHistory();

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/detail" component={Detail} />
    </Router>
);

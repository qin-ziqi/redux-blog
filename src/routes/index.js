import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';
const hashHistory = createHashHistory();

export default () => (
    <Router history={hashHistory}>
        <Frame>
            <Route path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </Frame>
    </Router>
);

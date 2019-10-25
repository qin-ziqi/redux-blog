import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';
const hashHistory = createHashHistory();

const routes = (
    <Router>
        <Frame>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
        </Frame>
    </Router>
);

export default routes;

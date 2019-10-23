import React from 'react';
import { Router, Route, IndexRoute } from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';

import Home from '../views/Home';
import Detail from '../views/Detail';
// import Frame from '../layouts/Frame';
const hashHistory = createHashHistory();

export default () => (
    <Router history={hashHistory}>
        {/* <Route path="/" component={Frame}> */}
        {/* <IndexRoute component={Home}></IndexRoute> */}
        <Route path="/detail" component={Detail} />
        {/* </Route> */}
    </Router>
);

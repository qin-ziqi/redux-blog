import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory, createBrowserHistory } from 'history';
import 'antd';

const store = configureStore();
const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
    <Provider store={store}>{routes(history)}</Provider>,
    document.getElementById('root')
);

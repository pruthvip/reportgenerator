import React from 'react';
import {render} from 'react-dom';
import {History, Router} from './utils/router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import routes from './routes';


require('../scss/main.scss');

// Creating Redux Store
const store = createStore(
    applyMiddleware(thunkMiddleware)
);


render(
    <Provider store={store}>
        <Router
            history={History}
            routes={routes}
        />
    </Provider>,
    document.getElementById('app-root')
);

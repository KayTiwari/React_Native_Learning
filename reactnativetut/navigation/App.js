import React, {Component} from 'react';
import Router from './Router';

const App = () => {
    return(
        <Provider store={store}>
            <Router />
        </Provider>
    )
}





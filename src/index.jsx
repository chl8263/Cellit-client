import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { hot } from 'react-hot-loader/root';

import App from'./component/App';
import store from './store';

const Hot = hot(App);

ReactDom.render(
    <Provider store={store}>
        <Hot />
    </Provider>
    , document.querySelector('#root')
);
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Component';

export default () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}
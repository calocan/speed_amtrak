/**
 * Created by Andy Likuski on 2016.05.23
 * Copyright (c) 2016 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Do this once before any other code in your app (http://redux.js.org/docs/advanced/AsyncActions.html)
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory} from 'react-router';
import App from './components/App'
import Site from './components/Site'
import makeStore from './store'
import {Provider} from 'react-redux';
import {setState} from './actions/site'
import initialState from './initialState'
import { createHistory } from 'history'
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHistory)({ queryKey: false })

const store = makeStore()
window.store = store;

/***
 * App is the common component for all of our routes
 */
const routes = <Route component={App}>
    <Route path="/*" component={Site} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={appHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);


store.dispatch(setState(initialState))


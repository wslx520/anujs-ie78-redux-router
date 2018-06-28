import {} from "../scss/GlobalCSS"
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'
import PageIndex from "./Pages/Index"
import PageDemos from "./Pages/Demos"
import {Navigation} from "./Components"
import {PageInbox, PageInboxMessage} from "./Pages/Inbox"

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// const Counter = require('containers/Counter')['default'];
import Counter  from 'containers/Counter'
const configureStore = require('store/configureStore')['default'];
class App extends React.Component{
    render() {
        return (
            <div>
                <Navigation />
                <Counter />
                <div className="container">{this.props.children}</div>
            </div>
        )
    }
}
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<IndexRedirect to="/index" />*/}
            {/*<Route path="index" component={PageIndex} />*/}
            <IndexRoute component={PageIndex}/>
            <Route path="demo" component={PageDemos} />
            <Route path="inbox" component={PageInbox}>
                <Route path="messages/:id" component={PageInboxMessage} />
            </Route>
        </Route>
    </Router>
    </Provider>,
    document.getElementById("app")
)
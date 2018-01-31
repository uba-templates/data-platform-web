import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent.js';

import Header from '../components/Header';

const Home = asyncComponent(() => import('../containers/Home'));
const About = asyncComponent(() => import('../containers/About'));
const NoMatch = asyncComponent(() => import('../containers/NoMatch'));

// react-router4 不推荐集中路由 组件在哪里匹配就在哪里渲染
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import App from './pages/app';

import Home from './pages/home';
import Intro from './pages/intro';
import Portfolio from './pages/portfolio';
import Features from './pages/features';
import FAQ from './pages/faq';
let basePath = '/medicinefinder.in/public/';
window.basePath = basePath;
ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Home} />
                <Route path={basePath} component={Home}/>
                <Route path={basePath+'intro'} component={Intro}/>
                <Route path={basePath+'portfolio'} component={Portfolio}/>
                <Route path={basePath+'features'} component={Features}/>
                <Route path={basePath+'faq'} component={FAQ}/>
            </Route>
        </Router>
    ),
    document.getElementById('app')
);

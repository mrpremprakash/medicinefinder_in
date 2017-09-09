import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import AdminApp from './app';

import Dashboard from './dashboard/index';
import Settings from './settings/index';

let basePath = '/medicinefinder.in/public/administrator';

window.basePath = basePath;
ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={AdminApp} >
                <IndexRoute component={Dashboard} />
                <Route path={basePath} component={Dashboard}/>
                <Route path={basePath+'/settings'} component={Settings}/>
            </Route>
        </Router>
    ),
    document.getElementById('app')
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopNav from './top_nav';
import Home from './home';
import Intro from './intro';
import Portfolio from './portfolio';
import Features from './features';
import FAQ from './faq';
import AddNew from './add_new';
import LoginRegister from './login';

let basePath = '/medicinefinder.in/public/';

window.basePath = basePath;
class App extends React.Component {
    render() {
        return (
            <div>
                <LoginRegister />
                <TopNav />
                <main>
                    <Switch>
                        <Route exact path={basePath} component={Home}/>
                        <Route path={basePath+'intro'} component={Intro}/>
                        <Route path={basePath+'portfolio'} component={Portfolio}/>
                        <Route path={basePath+'features'} component={Features}/>
                        <Route path={basePath+'faq'} component={FAQ}/>
                        <Route path={basePath+'add_new'} component={AddNew}/>
                    </Switch>
                </main>

            </div>
        )
    }
}
export default App;

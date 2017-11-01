import React from 'react';
import PropTypes from 'prop-types';
import {routerRedux, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;
/*
import App from './routes/app';
const RouterConfig = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </Router>
    )
}
*/


const RouterConfig = function ({history, app}) {
    const App = dynamic({
        app,
        models: () => [import('./models/home')],
        component: () => import ('./routes/app')
    })

    const Home = dynamic({
        app,
        component: () => import ('./routes/Home/index')
    })

    const HomeList = dynamic({
        app,
        // models: () => [import('./models/home')],
        component: () => import ('./routes/Home/HomeList')
    })

    return (
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/homelist" component={HomeList} />
                </Switch>
            </App>
        </ConnectedRouter>
    )
}

export default RouterConfig;

import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './routes/app';

const RouterConfig = ({history, app}) => {
  return (
      <Router history={ history }>
        <Switch>
          <Route exact path="/" component={ App } />
        </Switch>
      </Router>
  )
}

export default RouterConfig;

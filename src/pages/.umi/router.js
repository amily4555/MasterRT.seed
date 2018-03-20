import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from '/Users/Clish/Downloads/Workspace/ts-umi-dva/src/layouts/index.tsx';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/" component={require('../index/page.tsx').default} />
    <Route exact path="/list" component={() => React.createElement(require('/Users/Clish/Downloads/Workspace/ts-umi-dva/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/list' })} />
  </Switch></Layout>
</Router>
  );
}

import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from '/Users/Mizi/git/MasterRT.seed/src/layouts/index.tsx';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/" component={require('../index/page.tsx').default} />
    <Route exact path="/list" component={require('../list/page.tsx').default} />
  </Switch></Layout>
</Router>
  );
}

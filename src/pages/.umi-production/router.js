import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from '/Users/Mizi/git/MasterRT.seed/src/layouts/index.tsx';
import { routerRedux } from 'dva/router';
import _dvaDynamic from 'dva/dynamic';


let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/" component={_dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'src__pages__index__models__count.ts' */'/Users/Mizi/git/MasterRT.seed/src/pages/index/models/count.ts')
],
  component: () => import(/* webpackChunkName: 'src__pages__index__page' */'../index/page.tsx'),
})} />
    <Route exact path="/list" component={_dvaDynamic({
  
  component: () => import(/* webpackChunkName: 'src__pages__list__page' */'../list/page.tsx'),
})} />
  </Switch></Layout>
</Router>
  );
}

import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

const app = dva({
  history: window.g_history,
});
window.g_app = app;
app.use(createLoading());

app.model({ ...(require('/Users/Mizi/git/MasterRT.seed/src/models/global.js').default) });
app.model({ ...(require('/Users/Mizi/git/MasterRT.seed/src/pages/index/models/count.ts').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;

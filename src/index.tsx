import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Routes from './routes/root';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './store';

import rootReducer from './Reducers';
import rootSaga from './Sagas';

import App from './App';

const store = configureStore(rootReducer);

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

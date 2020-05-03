import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

let dispatch;

export function configureStore(rootReducer) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, undefined, middlewareEnhancer);

  store.runSaga = sagaMiddleware.run;

  dispatch = store.dispatch;

  return store;
}

export function getDispatch() {
  return dispatch;
}

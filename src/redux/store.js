import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';


const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
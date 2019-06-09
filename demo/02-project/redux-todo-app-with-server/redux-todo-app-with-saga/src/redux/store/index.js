import { createStore, compose, applyMiddleware } from 'redux';
import saga from 'redux-saga';
import sagas from '../sagas';
import appReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const createSagaMiddleware = saga();
const enhancer = composeEnhancers(applyMiddleware(createSagaMiddleware));
const store = createStore(appReducer, enhancer);
createSagaMiddleware.run(sagas);

export default store;

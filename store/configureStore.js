import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggerMiddleware from 'redux-logger';
import apiMiddleware from '../middleware/api';

const createStoreWithMiddleware = applyMiddleware(
  thunk,

  apiMiddleware,

  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

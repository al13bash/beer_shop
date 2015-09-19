import { combineReducers } from 'redux';
import products from './products';
import stores from './stores';

const rootReducer = combineReducers({
  products,
  stores
});

export default rootReducer;

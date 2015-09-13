import { combineReducers } from 'redux';
import resources from './resources';

const rootReducer = combineReducers({
  products: resources,
  stores: resources
});

export default rootReducer;

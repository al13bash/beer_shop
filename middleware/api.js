import 'isomorphic-fetch';
import * as ActionTypes from './../constants/action_types';

export default store => next => action => {
  if (!Object.is(action.type, ActionTypes.PRODUCTS_REQUEST) && !Object.is(action.type, ActionTypes.STORES_REQUEST)) {
    next(action);

    return false;
  }

  next({type: action.type.BEGIN});

  fetch(action.request.url)
    .then((response) => response.json())
    .then((json) => next({type: action.type.SUCCESS, payload: json}));
}

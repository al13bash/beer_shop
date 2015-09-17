import * as ActionTypes from './../constants/action_types';

export default function products(state = {isFetching: false, data: Array.apply(null, Array(20)).map(() => { return {} }), pager: {}}, action) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_REQUEST.BEGIN:
    case ActionTypes.STORES_REQUEST.BEGIN: {
      return {...state, isFetching: true}
    }
    case ActionTypes.PRODUCTS_REQUEST.SUCCESS:
    case ActionTypes.STORES_REQUEST.SUCCESS: {
      const { pager } = action.payload;
      const data = action.payload.result;

      return { data, pager, isFetching: false };
    }
    default:
      return state;
  }
}

import * as ActionTypes from './../constants/action_types';
import createReducerForResource from './../utils/reducers/create_reducer_for_resource';

export default createReducerForResource({
  begin: ActionTypes.PRODUCTS_REQUEST.BEGIN,
  success: ActionTypes.PRODUCTS_REQUEST.SUCCESS
})

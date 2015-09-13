import * as ActionTypes from './../constants/action_types';
import buildUrlWithQuery from './../utils/build_url_with_query';
import * as API_URLS from './../constants/urls';

export function fetchStores(query ={}) {
  return {
    type: ActionTypes.STORES_REQUEST,
    request: {
      url: buildUrlWithQuery({url: API_URLS.stores, query, keys: ['q', 'page', 'product_id']})
    }
  };
}

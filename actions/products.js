import * as ActionTypes from './../constants/action_types';
import buildUrlWithQuery from './../utils/build_url_with_query';
import * as API_URLS from './../constants/urls';

export function fetchProducts(query ={}) {
  return {
    type: ActionTypes.PRODUCTS_REQUEST,
    request: {
       url: buildUrlWithQuery({url: API_URLS.products, query, keys: ['q', 'page']})
    }
  };
}

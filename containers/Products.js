import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from '../components/Products';
import * as ProductActions from '../actions/products';

function mapStateToProps(state) {
  return {
    products: state.products.data,
    pager: state.products.pager,
    isFetching: state.products.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Stores from '../components/Stores';
import * as StoresActions from '../actions/stores';

function mapStateToProps(state) {
  return {
    stores: state.stores.data,
    pager: state.stores.pager,
    isFetching: state.stores.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(StoresActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stores);

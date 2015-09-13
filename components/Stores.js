import React, { Component, PropTypes } from 'react';

import Search from './Search';
import StoreCards from './StoreCards';
import Paginator from './Paginator';

class Stores extends Component {
  constructor(props) {
    super(props);

    this.fetchStores = this.props.fetchStores;
  }

  componentDidMount() {
    const { query } = this.props.location;

    this.fetchStores(query);
  }

  render() {
    const { isFetching, stores, pager } = this.props;
    const paginator = <Paginator fetchResources={this.fetchStores} pager={pager} location={this.props.location} />;

    return(
      <div>
        <Search fetchResources={this.fetchStores} location={this.props.location} />
          <div className="row">
            <div className="col s4 offset-s4">{ paginator }</div>
          </div>

          <div className="row">
            <StoreCards stores={stores} isFetching={isFetching} />
          </div>

          <div className="row">
            <div className="col s4 offset-s4">{ paginator }</div>
          </div>

          <footer className="page-footer">
          </footer>
        </div>
      );
    }
}

Stores.defaultProps = {
  isFetching: true
};

Stores.contextTypes = {
  router: PropTypes.object.isRequired
};

Stores.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  })
};

export default Stores;

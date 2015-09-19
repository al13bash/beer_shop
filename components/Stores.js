import React, { Component, PropTypes } from 'react';

import Search from './Search';
import StoreCards from './StoreCards';
import Paginator from './Paginator';
import RecordsContent from './RecordsContent';

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
    const storeCards = <StoreCards stores={stores} isFetching={isFetching} />;

    return(
      <div>
        <Search fetchResources={this.fetchStores} location={this.props.location} />
        <RecordsContent
          paginator={paginator}
          cards={storeCards}
          recordsName={"stores"}
          recordsCount={stores.length}
        />
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
    params: PropTypes.object
  }),
  fetchStores: PropTypes.func.isRequired
};

export default Stores;

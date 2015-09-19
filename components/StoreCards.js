import React, { Component, PropTypes } from 'react';
import SmallCard from './SmallCard';

class StoreCards extends Component {
  render() {
    const { stores, isFetching } = this.props;

    const storeCards = stores.map((store, index) => {
      return <SmallCard key={index} resource={store} isFetching={isFetching} />;
    });

    return(
      <div className="row">
        { storeCards }
      </div>
    );
  }
}

StoreCards.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  stores: PropTypes.array.isRequired
};

export default StoreCards;

import React, { Component, PropTypes } from 'react';
import Card from './Card';

class ProductCards extends Component {
  handleOnClick(id) {
    const { router } = this.context;

    router.transitionTo('stores', {product_id: id}, null);
  }

  render() {
    const { products, isFetching } = this.props;

    const productCards = products.map((product, index) => {
      return (
        <Card resource={product} key={index} isFetching={isFetching} handleOnClick={::this.handleOnClick}/>
      );
    });

    return(
      <div>
        { productCards }
      </div>
    );
  }
}

ProductCards.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ProductCards;

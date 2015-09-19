import React, { Component, PropTypes } from 'react';

import ProductCards from './ProductCards';
import Search from './Search';
import Paginator from './Paginator';
import RecordsContent from './RecordsContent';

class Products extends Component {
  constructor(props) {
    super(props);

    this.fetchProducts = this.props.fetchProducts;
  }

  componentDidMount() {
    const { query } = this.props.location;

    this.fetchProducts(query);
  }

  render() {
    const { isFetching, products, pager } = this.props;
    const paginator = <Paginator fetchResources={this.fetchProducts} pager={pager} location={this.props.location} />;
    const productCards = <ProductCards products={products} isFetching={isFetching} />

    return(
      <div>
        <Search fetchResources={this.fetchProducts} location={this.props.location} />
        <RecordsContent
          paginator={paginator}
          cards={productCards}
          recordsName={"beers"}
          recordsCount={products.length}
        />
      </div>
    );
  }
}

Products.defaultProps = {
  isFetching: true
};

Products.contextTypes = {
  router: PropTypes.object.isRequired
};

Products.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object
  }),
  fetchProducts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};

export default Products;

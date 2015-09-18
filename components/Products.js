import React, { Component, PropTypes } from 'react';
import ProductCards from './ProductCards';
import Search from './Search';
import Paginator from './Paginator';

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

    return(
      <div>
        <Search fetchResources={this.fetchProducts} location={this.props.location} />

        <div className="row">
          <div className="col s4 offset-s4"> { paginator } </div>
        </div>

        <div className="row">
          <ProductCards products={products} isFetching={isFetching} />
        </div>

        <div className="row">
          <div className="col s4 offset-s4"> { paginator } </div>
        </div>

        <footer className="page-footer">
        </footer>
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
  })
};

export default Products;

import React, { Component, PropTypes } from 'react';
import Preloader from './Preloader';

class SmallCard extends Component {
  render() {
    const { resource, isFetching } = this.props;

    const info = isFetching ?
      <Preloader /> :
      (
        <div>
          <span className="card-title">{resource.name}</span>
          <p>{resource.address_line_1}</p>
        </div>
      );

    return (
      <div className="col l4 m6 s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            { info }
          </div>
          <div className="card-action">
            <a href="#">{isFetching ? '' : resource.telephone}</a>
          </div>
        </div>
      </div>
    );
  }
}

SmallCard.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  resouce: PropTypes.object
};

export default SmallCard;

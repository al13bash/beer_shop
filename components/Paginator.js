import React, { Component, PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

class Paginator extends Component {
  constructor(props) {
    super(props);

    this.fetchResources = this.props.fetchResources;
  }

  handlePaginationSelect(event, selectedEvent) {
    const value = selectedEvent.eventKey;
    const { query, pathname } = this.props.location;
    const { router } = this.context;
    const newQuery = Object.assign({}, query, {page: value});

    this.props.pager.current_page = value;

    router.transitionTo(pathname, newQuery, null);
    this.fetchResources(newQuery);
  }

  render() {
    const { pager, location } = this.props;

    return(
      <Pagination
        bsSize='medium'
        prev
        next
        first
        last
        activePage={pager.current_page || (location.query && location.query.page)}
        maxButtons={5}
        items={pager.total_pages || 100}
        onSelect={::this.handlePaginationSelect}
        style={{padding: '50px'}}
      />
    );
  }
}

Paginator.contextTypes = {
  router: PropTypes.object.isRequired
};

Paginator.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object
  }).isRequired
};

export default Paginator;

import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    const { query } = this.props.location;
    this.state = {
      value: (query && query.q) || ''
    };

    this.fetchResources = this.props.fetchResources;
  }

  handleOnChange(event) {
    this.setState({value: event.target.value});
  }

  handleOnKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      const value = event.target.value;
      const { query, pathname } = this.props.location;
      const { router } = this.context;
      const newQuery = Object.assign({}, query, {q: value, page: undefined});

      router.transitionTo(pathname, newQuery, null);
      this.fetchResources(newQuery);
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required onKeyPress={::this.handleOnKeyPress} onChange={::this.handleOnChange} value={this.state.value}/>
              <label htmlFor="search"><i className="material-icons">search</i></label>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired
};

Search.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object
  })
};

export default Search;

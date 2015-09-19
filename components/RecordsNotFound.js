import React, { Component, PropTypes } from 'react';

class RecordsNotFound extends Component {
  render() {
    const { recordsName } = this.props;

    return(
      <div className="row">
        <h2 className="grey-text text-lighten-1" style={{textAlign: 'center'}}>
          {recordsName} not found :(
        </h2>
      </div>
    );
  }
}

RecordsNotFound.propTypes = {
  recordsName: PropTypes.string.isRequired
};

export default RecordsNotFound;

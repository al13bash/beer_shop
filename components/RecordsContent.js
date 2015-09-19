import React, { Component, PropTypes } from 'react';

import RecordsNotFound from './RecordsNotFound';

class RecordsContent extends Component {
  render() {
    const { paginator, cards, recordsCount, recordsName } = this.props;

    const content = (recordsCount !== 0) ?
      (<div>
        <div className="row">
          <div className="col s4 offset-s4"> { paginator } </div>
        </div>

        <div className="row">
          { cards }
        </div>

        <div className="row">
          <div className="col s4 offset-s4"> { paginator } </div>
        </div>
      </div>) :
      <RecordsNotFound recordsName={recordsName} />

    return(
      <div>
        { content }
      </div>
    );
  }
}

RecordsContent.propTypes = {
  paginator: PropTypes.object.isRequired,
  recordsCount: PropTypes.number.isRequired,
  recordsName: PropTypes.string.isRequired
};

export default RecordsContent;

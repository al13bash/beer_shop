import React, { Component, PropTypes } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.props.handleOnClick;
  }

  _handleOnClick(event, ) {
    const { resource } = this.props;

    this.handleOnClick(resource.id);
  }

  _resolve_image() {
    const { resource, isFetching } = this.props;

    if (isFetching) {
      return "http://www.vintandyork.com/skin/frontend/vandy_interface/vandy_theme/images/framesadvisor/scan.gif";
    } else if (resource.image_url){
      return resource.image_url;
    } else {
      return "http://glavpolis.ru/wp-content/uploads/2015/07/default-placeholder-1024x1024-960x1280.png";
    }
  }

  render() {
    const { resource, isFetching } = this.props;

    const image_url = ::this._resolve_image();

    return (
      <div className="col l3 m6 s12">
        <div className="card hoverable" style={{cursor: 'pointer'}} onClick={::this._handleOnClick}>
          <div>
            <div className="card-image">
              <img src={image_url} />
              <span className="card-title red-text text-lighten-2">{ isFetching ? '' : `$ ${resource.price_in_cents / 100}` }</span>
            </div>
            <div className="card-content truncate">
              <p>{isFetching ? '' : resource.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  isFetching: true
};

Card.propsTypes = {
  resource: PropTypes.object.isRequired,
  isFetching: PropTypes.boolean,
  handleOnClick: PropTypes.func.isRequired
};

export default Card;

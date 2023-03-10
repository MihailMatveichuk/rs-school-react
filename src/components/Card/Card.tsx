import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { id, title, description, price, thumbnail } = this.props.item;
    return (
      <div className="card" key={id}>
        <div className="top-part">
          <img src={thumbnail} alt={title} />
        </div>

        <div className="bottom-part">
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default Card;

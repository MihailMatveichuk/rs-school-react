import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { id, title, description, price, thumbnail } = this.props.item;
    return (
      <div className="card" key={id}>
        <img src={thumbnail} alt={title} />
        <span>{title}</span>
        <span>{description}</span>
        <span>{price}</span>
      </div>
    );
  }
}

export default Card;

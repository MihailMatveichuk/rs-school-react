import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { id, title, rating, price, thumbnail } = this.props.item;
    return (
      <div className="product-item" key={id}>
        <img src={thumbnail} alt={title} />
        <div className="product-list">
          <h3>{title}</h3>
          <span className="price">{price + '$'}</span>
          <p>
            <span
              style={{
                fontWeight: 'bold',
              }}
            >
              Rating:
            </span>{' '}
            {rating + ' ★'}
          </p>
          <a href="" className="button">
            В корзину
          </a>
        </div>
      </div>
    );
  }
}

export default Card;

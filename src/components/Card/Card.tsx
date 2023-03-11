import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  state = {
    toggle: false,
    id: '',
  };

  onToggleDesc = (e: { target: { parentNode: { id: string } } }) => {
    this.setState(({ toggle }) => ({
      toggle: !toggle,
      id: e.target.parentNode.id,
    }));
  };

  render() {
    const { id, title, rating, price, thumbnail } = this.props.item;
    const style = this.state.toggle ? `product-desc__active` : 'product-desc';
    const safeDesc = (id: string) => {
      if (this.props.item.id === id) {
        return this.props.item.description;
      }
    };
    return (
      <>
        <div className="product-item" key={id}>
          <img src={thumbnail} alt={title} />
          <div className="product-list" id={id}>
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
            <div className={style}>
              <span>{safeDesc(id)}</span>
            </div>
            <button className="button" onClick={this.onToggleDesc}>
              Description
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;

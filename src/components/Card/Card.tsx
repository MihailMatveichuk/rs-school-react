import React, { Component } from 'react';
import { ICards, SyntheticEvent } from 'type';
import './Card.scss';

class Card extends Component<{ item: ICards; key: number }, { toggle: boolean; id: string }> {
  state = {
    toggle: false,
    id: '',
  };

  onToggleDesc = (e: SyntheticEvent) => {
    this.setState(({ toggle }) => ({
      toggle: !toggle,
      id: e.target.parentNode.id,
    }));
  };

  render() {
    const { id, title, rating, price, thumbnail, brand } = this.props.item;
    const style = this.state.toggle ? `product-desc__active` : 'product-desc';
    const safeDesc = (id: number) => {
      if (this.props.item.id === id) {
        return this.props.item.description;
      }
    };
    return (
      <>
        <div className="product-item" key={id}>
          <img src={thumbnail} alt="img" />
          <div className="product-list" key={id}>
            <h3>{title}</h3>
            <p className="price">{price + '$'}</p>
            <p>{`Brand: ${brand}`}</p>
            <p
              style={{
                fontWeight: 'bold',
              }}
            >
              Rating: {rating + ' ★'}
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

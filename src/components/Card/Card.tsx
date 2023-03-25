import React, { useState } from 'react';
import { ICards } from 'type';
import './Card.scss';

const Card = (item: ICards) => {
  const [toggle, setToggle] = useState(false);
  console.log(item);

  const onToggleDesc = () => {
    setToggle(!toggle);
  };
  const { id, title, rating, price, thumbnail, brand } = item;
  const style = toggle ? `product-desc__active` : 'product-desc';
  const safeDesc = (id: number) => {
    if (item.id === id) {
      return item.description;
    }
  };

  return (
    <div className="product-item">
      <img src={thumbnail} alt="img" />
      <div className="product-list">
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
        <button className="button" onClick={onToggleDesc}>
          Description
        </button>
      </div>
    </div>
  );
};

export default Card;

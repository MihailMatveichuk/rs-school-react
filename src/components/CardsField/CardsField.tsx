import Card from '../Card/Card';
import React, { useState } from 'react';
import { ICards } from 'type';
import './CardsField.scss';

interface ICardsField {
  data: ICards[];
}

const CardsField = ({ data }: ICardsField) => {
  const [offset, setOffset] = useState(28);

  const onAddCards = () => {
    setOffset(offset + 9);
  };

  const displayStyle = data.length - offset <= 0 || data.length < 9 ? 'none' : 'block';
  return (
    <div className="cards">
      <div className="cards-field">
        {data
          .map((item: ICards) => {
            return <Card {...item} key={item.id} />;
          })
          .splice(0, offset)}
      </div>
      <div className="button-next">
        <button title="load" style={{ display: `${displayStyle}` }} onClick={onAddCards}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default CardsField;

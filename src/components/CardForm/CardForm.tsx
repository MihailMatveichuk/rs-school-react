import React from 'react';
import './CardForm.scss';
import { ICardData } from 'type';

const CardForm = (item: ICardData) => {
  const { avatar, firstName, birthday, select, switcher, checkbox } = item;

  return (
    <div className="product-item">
      <img src={avatar} alt="img" className="image" />
      <div className="product-list">
        <h3>{firstName}</h3>
        <p className="price">{`Birthday: ${birthday}`}</p>
        <p>{`Country: ${select}`}</p>
        <p
          style={{
            fontWeight: 'bold',
          }}
        >
          Sex: {switcher ? 'Female' : 'Male'}
        </p>
        <p>{`Rights: ${checkbox ? 'Yes' : 'No'}`}</p>
      </div>
    </div>
  );
};

export default CardForm;

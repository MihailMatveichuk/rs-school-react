import React from 'react';
import { ICardForm } from 'type';
import CardForm from '../CardForm/CardForm';
import './CardFieldForm.scss';

interface IPropsData {
  data: ICardForm[];
}

const CardFieldForm = ({ data }: IPropsData) => {
  console.log(data);
  return (
    <div className="cards">
      <div className="cards-field-form">
        {data.map((item: ICardForm, id: number) => {
          return <CardForm {...item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default CardFieldForm;

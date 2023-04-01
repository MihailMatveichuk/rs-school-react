import React from 'react';
import { ICardData } from 'type';
import CardForm from '../CardForm/CardForm';
import './CardFieldForm.scss';

interface IPropsData {
  data: ICardData[];
}

const CardFieldForm = ({ data }: IPropsData) => {
  return (
    <div className="cards">
      <div className="cards-field-form">
        {data.map((item, id: number) => {
          return <CardForm {...item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default CardFieldForm;

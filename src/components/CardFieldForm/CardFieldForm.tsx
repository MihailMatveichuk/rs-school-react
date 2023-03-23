import React, { Component } from 'react';
import { ICardForm } from 'type';
import CardForm from '../CardForm/CardForm';
import './CardFieldForm.scss';

class CardFieldForm extends Component<{ data: Array<ICardForm> }> {
  render() {
    const { data } = this.props;
    return (
      <div className="cards">
        <div className="cards-field">
          {data.map((item: ICardForm, id: number) => {
            return <CardForm item={item} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardFieldForm;

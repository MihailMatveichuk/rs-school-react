import React, { Component } from 'react';
import CardForm from '../CardForm/CardForm';

class CardFieldForm extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="cards">
        <div className="cards-field">
          {data.map((item: object, id: number) => {
            return <CardForm item={item} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardFieldForm;

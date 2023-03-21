import React, { Component } from 'react';
import './CardForm.scss';

class CardForm extends Component {
  render() {
    const { file, name, birthday, select, switcher, checkbox } = this.props.item;
    console.log(this.props);
    return (
      <div className="product-item">
        <img src={file} alt="img" />
        <div className="product-list">
          <h3>{name}</h3>
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
  }
}

export default CardForm;

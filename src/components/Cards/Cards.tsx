import Card from '../Card/Card';
import React, { Component } from 'react';
import './Cards.scss';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.data.map((item: object) => {
          <Card item={item} />;
        })}
      </div>
    );
  }
}

export default Cards;

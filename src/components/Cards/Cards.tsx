import Card from '../Card/Card';
import React, { Component } from 'react';
import './Cards.scss';

class Cards extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="cards">
        {this.props.data.map((item: object) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default Cards;

import Card from '../Card/Card';
import React, { Component } from 'react';
import './Cards.scss';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.data
          .map((item: object) => {
            return <Card item={item} key={item.id} />;
          })
          .splice(0, 50)}
      </div>
    );
  }
}

export default Cards;

import Card from '../Card/Card';
import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item: object) => {
          <Card data={item} />;
        })}
      </div>
    );
  }
}

export default Cards;

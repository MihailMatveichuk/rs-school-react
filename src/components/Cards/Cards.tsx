import Card from '../Card/Card';
import React, { Component } from 'react';
import './Cards.scss';

class Cards extends Component {
  state = {
    offset: 28,
  };

  onAddCards = () => {
    this.setState(({ offset }) => ({
      offset: offset + 9,
    }));
  };
  render() {
    const { offset } = this.state;
    const { data } = this.props;
    const displayStyle = data.length - offset <= 0 || data.length < 9 ? 'none' : 'block';
    return (
      <div className="cards">
        <div className="cards-field">
          {data
            .map((item: object) => {
              return <Card item={item} key={item.id} />;
            })
            .splice(0, offset)}
        </div>
        <div className="button-next">
          <button style={{ display: `${displayStyle}` }} onClick={this.onAddCards}>
            Load more
          </button>
        </div>
      </div>
    );
  }
}

export default Cards;

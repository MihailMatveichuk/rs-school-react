import Card from '../Card/Card';
import React, { Component } from 'react';
import './CardsField.scss';
class CardsField extends Component {
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
        return (React.createElement("div", { className: "cards" },
            React.createElement("div", { className: "cards-field" }, data
                .map((item) => {
                return React.createElement(Card, { item: item, key: item.id });
            })
                .splice(0, offset)),
            React.createElement("div", { className: "button-next" },
                React.createElement("button", { title: "load", style: { display: `${displayStyle}` }, onClick: this.onAddCards }, "Load more"))));
    }
}
export default CardsField;

import Card from '../Card/Card';
import React, { useState } from 'react';
import './CardsField.scss';
const CardsField = ({ data }) => {
    const [offset, setOffset] = useState(28);
    const onAddCards = () => {
        setOffset(offset + 9);
    };
    const displayStyle = data.length - offset <= 0 || data.length < 9 ? 'none' : 'block';
    return (React.createElement("div", { className: "cards" },
        React.createElement("div", { className: "cards-field" }, data
            .map((item) => {
            return React.createElement(Card, { ...item, key: item.id });
        })
            .splice(0, offset)),
        React.createElement("div", { className: "button-next" },
            React.createElement("button", { title: "load", style: { display: `${displayStyle}` }, onClick: onAddCards }, "Load more"))));
};
export default CardsField;

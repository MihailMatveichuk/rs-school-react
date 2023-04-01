import React, { useState } from 'react';
import './Card.scss';
const Card = (item) => {
    const [toggle, setToggle] = useState(false);
    const onToggleDesc = () => {
        setToggle(!toggle);
    };
    const { id, title, rating, price, thumbnail, brand } = item;
    const style = toggle ? `product-desc__active` : 'product-desc';
    const safeDesc = (id) => {
        if (item.id === id) {
            return item.description;
        }
    };
    return (React.createElement("div", { className: "product-item" },
        React.createElement("img", { src: thumbnail, alt: "img" }),
        React.createElement("div", { className: "product-list" },
            React.createElement("h3", null, title),
            React.createElement("p", { className: "price" }, price + '$'),
            React.createElement("p", null, `Brand: ${brand}`),
            React.createElement("p", { style: {
                    fontWeight: 'bold',
                } },
                "Rating: ",
                rating + ' ★'),
            React.createElement("div", { className: style },
                React.createElement("span", null, safeDesc(id))),
            React.createElement("button", { className: "button", onClick: onToggleDesc }, "Description"))));
};
export default Card;

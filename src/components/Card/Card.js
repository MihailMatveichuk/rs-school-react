import React, { Component } from 'react';
import './Card.scss';
class Card extends Component {
    state = {
        toggle: false,
        id: '',
    };
    onToggleDesc = (e) => {
        this.setState(({ toggle }) => ({
            toggle: !toggle,
            id: e.target.parentNode.id,
        }));
    };
    render() {
        const { id, title, rating, price, thumbnail, brand } = this.props.item;
        const style = this.state.toggle ? `product-desc__active` : 'product-desc';
        const safeDesc = (id) => {
            if (this.props.item.id === id) {
                return this.props.item.description;
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
                React.createElement("button", { className: "button", onClick: this.onToggleDesc }, "Description"))));
    }
}
export default Card;

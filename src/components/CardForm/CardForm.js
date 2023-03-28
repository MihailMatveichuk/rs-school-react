import React, { Component } from 'react';
import './CardForm.scss';
class CardForm extends Component {
    render() {
        const { file, name, birthday, select, switcher, checkbox } = this.props.item;
        return (React.createElement("div", { className: "product-item" },
            React.createElement("img", { src: file, alt: "img", className: "image" }),
            React.createElement("div", { className: "product-list" },
                React.createElement("h3", null, name),
                React.createElement("p", { className: "price" }, `Birthday: ${birthday}`),
                React.createElement("p", null, `Country: ${select}`),
                React.createElement("p", { style: {
                        fontWeight: 'bold',
                    } },
                    "Sex: ",
                    switcher ? 'Female' : 'Male'),
                React.createElement("p", null, `Rights: ${checkbox ? 'Yes' : 'No'}`))));
    }
}
export default CardForm;

import React from 'react';
import './CardForm.scss';
const CardForm = (item) => {
    const { avatar, firstName, birthday, select, switcher, checkbox } = item;
    return (React.createElement("div", { className: "product-item" },
        React.createElement("img", { src: avatar, alt: "img", className: "image" }),
        React.createElement("div", { className: "product-list" },
            React.createElement("h3", null, firstName),
            React.createElement("p", { className: "price" }, `Birthday: ${birthday}`),
            React.createElement("p", null, `Country: ${select}`),
            React.createElement("p", { style: {
                    fontWeight: 'bold',
                } },
                "Sex: ",
                switcher ? 'Female' : 'Male'),
            React.createElement("p", null, `Rights: ${checkbox ? 'Yes' : 'No'}`))));
};
export default CardForm;

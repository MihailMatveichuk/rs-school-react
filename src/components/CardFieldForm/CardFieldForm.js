import React from 'react';
import CardForm from '../CardForm/CardForm';
import './CardFieldForm.scss';
const CardFieldForm = ({ data }) => {
    return (React.createElement("div", { className: "cards" },
        React.createElement("div", { className: "cards-field-form" }, data.map((item, id) => {
            return React.createElement(CardForm, { ...item, key: id });
        }))));
};
export default CardFieldForm;

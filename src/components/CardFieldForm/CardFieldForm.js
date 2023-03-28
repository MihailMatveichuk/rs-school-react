import React, { Component } from 'react';
import CardForm from '../CardForm/CardForm';
import './CardFieldForm.scss';
class CardFieldForm extends Component {
    render() {
        const { data } = this.props;
        return (React.createElement("div", { className: "cards" },
            React.createElement("div", { className: "cards-field-form" }, data.map((item, id) => {
                return React.createElement(CardForm, { item: item, key: id });
            }))));
    }
}
export default CardFieldForm;

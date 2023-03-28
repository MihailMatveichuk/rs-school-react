import React, { Component } from 'react';
import CardsFieldForm from '../CardFieldForm/CardFieldForm';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';
class Forms extends Component {
    formRef = React.createRef();
    state = {
        data: [],
        errorName: false,
        errorRights: false,
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const card = {
            file: '',
            name: '',
            birthday: '',
            select: '',
            switcher: false,
            checkbox: false,
        };
        const fileInputElement = this.formRef.current?.elements.namedItem('file');
        const fileList = fileInputElement.files;
        const fileListAsArray = fileList ? Array.from([...fileList]) : [];
        if (!this.formRef.current) {
            return null;
        }
        for (const key of Array.from(this.formRef.current.elements)) {
            if (key.id === 'checkbox' || key.id === 'switcher') {
                if (key.id === 'checkbox') {
                    if (key.checked === false) {
                        this.setState({
                            errorRights: true,
                        });
                        return;
                    }
                    else {
                        this.setState({
                            errorRights: false,
                        });
                        card[key.id] = key.checked;
                    }
                }
                card[key.id] = key.checked;
            }
            else if (key.id === 'name') {
                const regex = new RegExp(/^[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}\s[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}$|^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/gm);
                if (!regex.test(key.value)) {
                    this.setState({
                        errorName: true,
                    });
                    return;
                }
                else {
                    this.setState({
                        errorName: false,
                    });
                    card[key.id] = key.value;
                }
            }
            else {
                if (key.id === 'birthday' || key.id === 'select') {
                    card[key.id] = key.value;
                }
                if (key.id === 'file') {
                    if (fileListAsArray.length > 0 && fileListAsArray[0] instanceof Blob) {
                        const objectImg = fileListAsArray[0];
                        const pathImg = URL.createObjectURL(objectImg);
                        this.setState({
                            errorInput: false,
                        });
                        card[key.id] = pathImg;
                    }
                    else {
                        this.setState({
                            errorInput: true,
                        });
                    }
                }
            }
        }
        this.setState({
            data: [...this.state.data, card],
            errorName: false,
            errorBirthday: false,
        });
        this.formRef.current.reset();
        alert('Data was saved');
    };
    handleChange;
    render() {
        const { data, errorName, errorRights } = this.state;
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const formattedDate = year + '-' + month + '-' + day;
        return (React.createElement("div", { className: "forms-field" },
            React.createElement("div", { className: "form" },
                React.createElement("form", { ref: this.formRef, onSubmit: this.handleSubmit },
                    React.createElement("h2", null, "Customer information"),
                    React.createElement("div", { className: "logo-choose" },
                        React.createElement("input", { style: { display: 'none' }, type: "file", id: "file", name: "file" }),
                        React.createElement("label", { htmlFor: "file" },
                            React.createElement("img", { src: Photo, alt: "file", id: "input_img" }))),
                    React.createElement("label", { htmlFor: "name" }, "Your first and second name"),
                    React.createElement("input", { id: "name", name: "name", type: "text", placeholder: "Alex Popov" }),
                    React.createElement("span", { style: { color: 'red' } }, errorName ? 'Invalid value' : null),
                    React.createElement("label", { htmlFor: "birthday" }, "Your birthday"),
                    React.createElement("input", { id: "birthday", name: "birthday", type: "date", defaultValue: formattedDate, min: "1950-01-01", max: formattedDate }),
                    React.createElement("label", { htmlFor: "select" }, " Pick your country:"),
                    React.createElement("select", { onChange: this.handleChange, id: "select", name: "select" },
                        React.createElement("option", { value: "Belarus" }, "Belarus"),
                        React.createElement("option", { value: "Russia" }, "Russia"),
                        React.createElement("option", { value: "Poland" }, "Poland"),
                        React.createElement("option", { value: "Ukraine" }, "Ukraine")),
                    React.createElement("label", { className: "switch" },
                        React.createElement("input", { id: "switcher", type: "checkbox", name: "switcher" }),
                        React.createElement("span", { className: "slider round" })),
                    React.createElement("label", { htmlFor: "select", className: "checkbox-field" },
                        "I consent to my personal data:",
                        React.createElement("input", { id: "checkbox", name: "checkbox", type: "checkbox", className: "custom-checkbox", "data-testid": "consent-checkbox" }),
                        React.createElement("span", { style: { color: 'red' } }, errorRights ? 'Tick rights' : null)),
                    React.createElement("button", { type: "submit" }, "Submit"))),
            React.createElement(React.Fragment, null,
                React.createElement(CardsFieldForm, { data: data }))));
    }
}
export default Forms;

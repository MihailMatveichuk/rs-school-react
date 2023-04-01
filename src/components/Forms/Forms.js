import React, { useState, useEffect } from 'react';
import CardsFieldForm from '../CardFieldForm/CardFieldForm';
import { useForm } from 'react-hook-form';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';
import { getBase64 } from './util';
const Forms = () => {
    const [dataCard, setData] = useState([]);
    const [avatar, setAvatar] = useState(Photo);
    const { register, formState: { errors }, handleSubmit, reset, } = useForm();
    const onSubmit = (data) => {
        setData((prevState) => {
            const newState = [...prevState, { ...data, avatar }];
            window.localStorage.setItem('cardData', JSON.stringify(newState));
            alert('Data was saved');
            return newState;
        });
        setAvatar(Photo);
        reset();
    };
    const avatarHandler = async (e) => {
        if (e.target.files?.length) {
            const base64Avatar = await getBase64(e.target.files[0], 150);
            setAvatar(base64Avatar);
        }
    };
    useEffect(() => {
        const cardData = window.localStorage.getItem('cardData');
        if (cardData) {
            setData(JSON.parse(cardData));
        }
    }, []);
    const regex = new RegExp(/^[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}\s[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}$|^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/gm);
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const formattedDate = year + '-' + month + '-' + day;
    return (React.createElement("div", { className: "forms-field" },
        React.createElement("div", { className: "form" },
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement("h2", null, "Customer information"),
                React.createElement("div", { className: "logo-choose" },
                    React.createElement("input", { style: { display: 'none' }, type: "file", id: "file", name: "file", onChange: avatarHandler }),
                    React.createElement("label", { htmlFor: "file" },
                        React.createElement("img", { src: avatar, alt: "file", id: "input_img" }),
                        ' ')),
                React.createElement("label", { htmlFor: "firstName" }, "Your first and second name"),
                React.createElement("input", { ...register('firstName', {
                        pattern: regex,
                        required: 'This field is required!',
                    }), id: "firstName", type: "text", placeholder: "Alex Popov" }),
                React.createElement("div", { className: "input-error" }, errors?.firstName && React.createElement("p", null, errors?.firstName && 'Invalid value!')),
                React.createElement("label", { htmlFor: "birthday" }, "Your birthday"),
                React.createElement("input", { ...register('birthday', { required: 'This field is required', max: formattedDate }), id: "birthday", type: "date", min: "1950-01-01" }),
                React.createElement("div", { className: "input-error" }, errors?.birthday && `Max value is ${formattedDate}!`),
                React.createElement("label", { htmlFor: "select" }, " Pick your country:"),
                React.createElement("select", { ...register('select'), id: "select" },
                    React.createElement("option", { value: "Belarus" }, "Belarus"),
                    React.createElement("option", { value: "Russia" }, "Russia"),
                    React.createElement("option", { value: "Poland" }, "Poland"),
                    React.createElement("option", { value: "Ukraine" }, "Ukraine")),
                React.createElement("label", { className: "switch" },
                    React.createElement("input", { ...register('switcher'), id: "switcher", type: "checkbox", name: "switcher" }),
                    React.createElement("span", { className: "slider round" })),
                React.createElement("label", { htmlFor: "select", className: "checkbox-field" },
                    React.createElement("div", { className: "checkbox-top-field" },
                        "I consent to my personal data:",
                        React.createElement("input", { id: "checkbox", type: "checkbox", className: "custom-checkbox", ...register('checkbox', { required: 'Check this' }) })),
                    React.createElement("div", { className: "input-error" }, errors?.checkbox && 'Give rights')),
                React.createElement("button", { type: "submit" }, "Submit"))),
        React.createElement(React.Fragment, null,
            React.createElement(CardsFieldForm, { data: dataCard }))));
};
export default Forms;

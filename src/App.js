import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import CardsField from './components/CardsField/CardsField';
import About from './components/About/About';
import Error from './components/Error/Error';
import { Footer } from './components/Footer/Footer';
import Forms from './components/Forms/Forms';
import './App.scss';
const App = () => {
    const [term, setTerm] = useState('');
    useEffect(() => {
        const value = localStorage.getItem('value');
        setTerm(value || '');
    }, []);
    const searchEmp = (items, term) => {
        if (!term) {
            return items;
        }
        else {
            return items?.filter((item) => {
                return (item.title.toLowerCase().includes(term.toLowerCase()) ||
                    item.description.toLowerCase().includes(term.toLowerCase()) ||
                    item.price == +term ||
                    item.rating == +term);
            });
        }
    };
    const onUpdateSearch = (term) => {
        setTerm(term);
        localStorage.setItem('value', term);
    };
    const visibleData = searchEmp(data, term);
    return (React.createElement("div", { className: "main-page" },
        React.createElement(Header, { onUpdateSearch: onUpdateSearch, value: term }),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(CardsField, { data: visibleData }) }),
            React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(Error, null) }),
            React.createElement(Route, { path: "/form", element: React.createElement(Forms, null) })),
        React.createElement(Footer, null)));
};
export default App;

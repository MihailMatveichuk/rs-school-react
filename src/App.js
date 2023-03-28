import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import CardsField from './components/CardsField/CardsField';
import About from './components/About/About';
import Error from './components/Error/Error';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import './App.scss';
import Forms from './components/Forms/Forms';
class App extends Component {
    state = {
        data,
        term: '',
    };
    componentDidMount() {
        const value = localStorage.getItem('value');
        this.setState(() => ({
            term: value,
        }));
    }
    searchEmp = (items, term) => {
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
    onUpdateSearch = (term) => {
        this.setState({ term });
        localStorage.setItem('value', term);
    };
    render() {
        const { data, term } = this.state;
        const visibleData = this.searchEmp(data, term);
        return (React.createElement("div", { className: "main-page" },
            React.createElement(ErrorBoundary, null,
                React.createElement(Header, { onUpdateSearch: this.onUpdateSearch, value: term }),
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(CardsField, { data: visibleData }) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(Error, null) }),
                    React.createElement(Route, { path: "/form", element: React.createElement(Forms, { data: [], errorName: false, errorRights: false }) })),
                React.createElement(Footer, null))));
    }
}
export default App;

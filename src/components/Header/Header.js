import React, { Component } from 'react';
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';
import './Header.scss';
class Header extends Component {
    state = {
        home: true,
        about: false,
    };
    render() {
        const { onUpdateSearch, value } = this.props;
        return (React.createElement("div", { className: "header-container" },
            React.createElement("div", { className: "top-nav" },
                React.createElement(NavLink, { to: `/` }, "Home"),
                React.createElement(NavLink, { to: `/about` }, "About us"),
                React.createElement(NavLink, { to: `/form` }, "Form")),
            React.createElement("div", { className: "bottom-nav" },
                React.createElement(Search, { onUpdateSearch: onUpdateSearch, value: value }))));
    }
}
export default Header;

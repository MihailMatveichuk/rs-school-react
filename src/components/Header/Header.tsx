import React, { Component } from 'react';
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component<
  { onUpdateSearch: (term: string) => void; value: string },
  { home: boolean; about: boolean }
> {
  state = {
    home: true,
    about: false,
  };

  render() {
    const { onUpdateSearch, value } = this.props;

    return (
      <div className="header-container">
        <div className="top-nav">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/about`}>About us</NavLink>
          <NavLink to={`/forms`}>Form</NavLink>
        </div>
        <div className="bottom-nav">
          <Search onUpdateSearch={onUpdateSearch} value={value} />
        </div>
      </div>
    );
  }
}

export default Header;

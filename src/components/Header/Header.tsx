import About from '../About/About';
import React, { Component } from 'react';
import Search from '../Search/Search';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    home: true,
    about: false,
  };

  onToggleActive = (e: { target: { id: string } }) => {
    if (e.target.id == 'about') {
      this.setState({
        home: false,
        about: true,
      });
    } else if (e.target.id == 'home') {
      this.setState({
        home: true,
        about: false,
      });
    }
  };

  render() {
    const { home, about } = this.state;
    const { onUpdateSearch, value } = this.props;

    const buttonsData = [
      { id: 'home', label: 'Home', active: home, url: '' },
      { id: 'about', label: 'About us', active: about, url: 'about' },
    ];

    const buttons = buttonsData.map((button, i) => {
      return (
        <Link
          to={`/${button.url}`}
          className={button.active ? 'active' : null}
          id={button.id}
          key={i}
          onClick={this.onToggleActive}
        >
          {button.label}
        </Link>
      );
    });

    return (
      <div className="header-container">
        <div className="top-nav">{buttons}</div>

        <div className="bottom-nav">
          <Search onUpdateSearch={onUpdateSearch} value={value} />
        </div>
      </div>
    );
  }
}

export default Header;

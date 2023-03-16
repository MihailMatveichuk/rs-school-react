import React, { Component } from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { SyntheticHeader } from 'type';
import './Header.scss';

class Header extends Component<
  { onUpdateSearch: (term: string) => void; value: string },
  { home: boolean; about: boolean }
> {
  state = {
    home: true,
    about: false,
  };

  onToggleActive = (e: SyntheticHeader) => {
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
          className={button.active ? 'active' : undefined}
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

import About from '../About/About';
import React, { Component } from 'react';
import Search from '../Search/Search';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="top-nav">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About us</Link>
        </div>

        <div className="bottom-nav">
          <Search onUpdateSearch={this.props.onUpdateSearch} />
        </div>
      </div>
    );
  }
}

export default Header;

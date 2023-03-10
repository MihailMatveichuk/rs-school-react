import About from '../About/About';
import React, { Component } from 'react';
import Search from '../Search/Search';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-h1">Hello</div>

        <div className="right-part-header">
          <Search onUpdateSearch={this.props.onUpdateSearch} />
          <Link to="/about">
            <About />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

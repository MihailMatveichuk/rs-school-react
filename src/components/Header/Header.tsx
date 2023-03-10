import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-h1"></div>
        <div
          style={{
            color: 'rgb(129, 49, 49)',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        ></div>

        <div className="right-part-header"></div>
      </div>
    );
  }
}

export default Header;

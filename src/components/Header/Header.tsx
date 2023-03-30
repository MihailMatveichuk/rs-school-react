import React from 'react';
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export interface IHeaderProps {
  onUpdateSearch: (term: string) => void;
  value: string;
}

const Header = (props: IHeaderProps) => {
  const { onUpdateSearch, value } = props;

  return (
    <div className="header-container">
      <div className="top-nav">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About us</NavLink>
        <NavLink to={`/form`}>Form</NavLink>
      </div>
      <div className="bottom-nav">
        <Search onUpdateSearch={onUpdateSearch} value={value} />
      </div>
    </div>
  );
};

export default Header;

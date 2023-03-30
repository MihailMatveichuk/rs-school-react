import React, { useState } from 'react';
import { IHeaderProps } from '../Header/Header';
import './Search.scss';

const Search = (props: IHeaderProps) => {
  const [term, setTerm] = useState('');

  const onUpdateSearch = (e: { target: { value: string } }) => {
    const term = e.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      className="search form-control search-input danger"
      placeholder="Search..."
      value={props.value || term}
      onChange={onUpdateSearch}
    />
  );
};

export default Search;

import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor(props: Array<object>) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e: { target: { value: string } }) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="search form-control search-input danger"
        placeholder="Search..."
        value={this.props.value || this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default Search;

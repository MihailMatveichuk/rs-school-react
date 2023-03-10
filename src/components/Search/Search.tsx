import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor(props) {
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
      <form>
        <input
          type="text"
          className="search form-control search-input"
          placeholder="Search"
          defaultValue={this.state.term}
          onChange={this.onUpdateSearch}
        />
      </form>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import './Search.scss';

export class SearchElement extends Component {
  state = {
    term: '',
  };

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
          className="search"
          placeholder="Search"
          defaultValue={this.state.term}
          onChange={this.onUpdateSearch}
        />
      </form>
    );
  }
}

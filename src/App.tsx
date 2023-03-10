import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import './App.scss';

class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      data,
      term: '',
    };
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    } else {
      return items.filter((item) => {
        return (
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.description.toLowerCase().includes(term.toLowerCase()) ||
          item.price == +term ||
          item.rating == +term
        );
      });
    }
  };

  onUpdateSearch = (term: string) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const visibleData = this.searchEmp(data, term);
    return (
      <div className="main-page">
        <Header onUpdateSearch={this.onUpdateSearch} />
        <Routes>
          <Route path="/" element={<Cards data={visibleData} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

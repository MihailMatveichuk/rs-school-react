import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Error from './components/Error/Error';
import { Footer } from './components/Footer/Footer';
import { ICards, MyData, Term } from 'type';
import './App.scss';

class App extends Component {
  state = {
    data,
    term: '',
  };

  componentDidMount(): void {
    const value = localStorage.getItem('value');
    this.setState(() => ({
      term: value,
    }));
  }

  searchEmp = (items: Array<ICards>, term: Term) => {
    if (term!.length == 0) {
      return items;
    } else {
      return items.filter((item) => {
        return (
          item.title!.toLowerCase().includes(term!.toLowerCase()) ||
          item.description!.toLowerCase().includes(term!.toLowerCase()) ||
          item.price == +term! ||
          item.rating == +term!
        );
      });
    }
  };

  onUpdateSearch = (term: string) => {
    this.setState({ term });
    localStorage.setItem('value', term);
  };

  render() {
    const { data, term } = this.state;
    const visibleData = this.searchEmp(data, term);
    return (
      <div className="main-page">
        <Header onUpdateSearch={this.onUpdateSearch} value={term} />
        <Routes>
          <Route path="/" element={<Cards data={visibleData} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;

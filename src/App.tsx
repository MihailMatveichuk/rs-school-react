import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import CardsField from './components/CardsField/CardsField';
import About from './components/About/About';
import Error from './components/Error/Error';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import { ICards } from 'type';
import './App.scss';
import Forms from './components/Forms/Forms';

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

  searchEmp = (items: Array<ICards>, term: string) => {
    if (!term) {
      return items;
    } else {
      return items?.filter((item) => {
        return (
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.description.toLowerCase().includes(term.toLowerCase()) ||
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
        <ErrorBoundary>
          <Header onUpdateSearch={this.onUpdateSearch} value={term} />
          <Routes>
            <Route path="/" element={<CardsField data={visibleData} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

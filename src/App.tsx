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
      data: data,
      term: '',
    };
  }
  render() {
    return (
      <div className="main-page">
        <Header />
        <Routes>
          <Route path="/" element={<Cards data={this.state.data} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

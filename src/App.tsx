import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';

import './App.scss';

class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      data,
      term: '',
    };
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="main-page">
        <Header />
        <Routes>
          <Route path="/" element={<Cards data={data} loading={loading} />} />
          <Route
            path="/about"
            element={
              <About
                onAdd={addToOrder}
                onDelete={deleteToOrder}
                orders={orders}
                openOrderForm={openOrderForm}
                prop={prop}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

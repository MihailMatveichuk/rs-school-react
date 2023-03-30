import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from './data';
import Header from './components/Header/Header';
import CardsField from './components/CardsField/CardsField';
import About from './components/About/About';
import Error from './components/Error/Error';
import { Footer } from './components/Footer/Footer';
import Forms from './components/Forms/Forms';
import { ICards } from 'type';
import './App.scss';

const App = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const value: string | null = localStorage.getItem('value');
    setTerm(value || '');
  }, []);

  const searchEmp = (items: Array<ICards>, term: string) => {
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

  const onUpdateSearch = (term: string) => {
    setTerm(term);
    localStorage.setItem('value', term);
  };

  const visibleData = searchEmp(data, term);
  return (
    <div className="main-page">
      <Header onUpdateSearch={onUpdateSearch} value={term} />
      <Routes>
        <Route path="/" element={<CardsField data={visibleData} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/form" element={<Forms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

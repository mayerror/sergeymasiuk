import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './assets/styles/App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="wrap">
          <Header />
          <Routes>
            <Route element={<NotFound />} path="*" />
            <Route element={<About />} path="/" />
            <Route element={<Portfolio />} path="portfolio" />
            <Route element={<Contact />} path="contact" />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

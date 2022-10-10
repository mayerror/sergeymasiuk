import React from 'react';

import './assets/styles/App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className="wrap">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;

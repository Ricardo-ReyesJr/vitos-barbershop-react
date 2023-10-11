import React from 'react';
import './style.css';
import './gallery.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { BrowserRouter as Router,Routes, Route }  from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/gallery' Component={Gallery} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}


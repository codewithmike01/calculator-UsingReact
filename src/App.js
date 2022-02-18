import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

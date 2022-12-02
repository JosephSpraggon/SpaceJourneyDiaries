import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Logs from './components/pages/Logs';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/logs' exact element={<Logs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import ReactGA from 'react-ga';
import './App.css';
import Home from './pages/Home';
import Books from './pages/Books';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ANT" element={<Books book="ANT" />} />
        <Route path="/DJC" element={<Books book="DJC" />} />
        <Route path="/BAM" element={<Books book="BAM" />} />
      </Routes>
    </Router>
  );
}

export default App;

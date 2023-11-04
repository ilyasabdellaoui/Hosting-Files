// import React, { useEffect, useState } from 'react';
// import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Carousel from './components/Carousel';

function App() {
  const visits = 10000;
  const bookDownloads = 100000;
  const numberOfBooks = 10;

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Hero visits={visits} bookDownloads={bookDownloads} numberOfBooks={numberOfBooks} />
      <Search />
      <Carousel />
    </div>
  );
}

export default App;

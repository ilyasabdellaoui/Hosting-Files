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
    <div className="LandingPage">
      <header>
        <Navbar />
      </header>
      <hero>
        <Hero visits={visits} bookDownloads={bookDownloads} numberOfBooks={numberOfBooks} />
      </hero>
      <section>
        <Search />
        <Carousel />
      </section>
    </div>
  );
}

export default App;

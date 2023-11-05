// import React, { useEffect, useState } from 'react';
// import ReactGA from 'react-ga';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  const visits = 10000;
  const bookDownloads = 100000;
  const numberOfBooks = 10;

  return (
    <div className="LandingPage">
        <Navbar />
        <Hero visits={visits} bookDownloads={bookDownloads} numberOfBooks={numberOfBooks} />
        <Search />
        <Carousel />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Home;

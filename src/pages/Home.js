import React, { useEffect } from 'react';
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

  // SEO Tags
  useEffect(() => {
    const image = window.location + "LOGO.png";
    const ogImage = document.querySelector('meta[property="og:image"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    ogImage.setAttribute("content", image);
    twitterImage.setAttribute("content", image);
  }, []);

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

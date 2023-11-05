import React from 'react';
import CountUp from 'react-countup';
import '../styles/Hero.css';
function scrollToNextComponent() {
    const nextComponent = document.getElementsByClassName('carousel slide')[0];
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
}

const Hero = ({ visits, bookDownloads, numberOfBooks }) => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Arab-speaking Readers with <br /> Quality Literature</h1>
          <div className="hero-stats">
            <div className="hero-stat">
              <CountUp end={visits} duration={2.5} separator="," />
              <p>Website Visits</p>
            </div>
            <div className="hero-stat">
              <CountUp end={bookDownloads} duration={2.5} separator="," />
              <p>Book Downloads</p>
            </div>
            <div className="hero-stat">
              <CountUp end={numberOfBooks} duration={2.5} separator="," />
              <p>Books Available</p>
            </div>
          </div>
          <div className="browse-books">
            <button onClick={scrollToNextComponent}>Explore Our Books</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
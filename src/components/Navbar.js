import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Use useEffect to add or remove 'overflow: hidden' from the body element
  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavExpanded]);

  return (
    <nav className="navigation">
      <a className="brand-name" href="/">
        <svg className="home-icon" style={{ width: '40px', height: '40px', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M336.2 571.3h337.9v319.3H336.2z" fill="#ced4da" /><path d="M296.3 405.6l185-185c9-9 20.9-13.5 32.7-13.5 11.9 0 23.7 4.5 32.7 13.5l185.7 185.7 194.1 194.1c1.9 1.9 5.1 1.3 6.2-1.1 7.9-17.9 12.1-37.4 12.1-57.5 0-38.1-14.8-73.8-41.7-100.7L614.7 152.6c-55.6-55.5-145.9-55.5-201.5 0L124.9 441C98 467.9 83.2 503.6 83.2 541.7c0 20.1 4.2 39.7 12.1 57.5 1.1 2.4 4.3 3 6.2 1.1l194.8-194.7z" fill="#ced4da" /><path d="M201.6 566.2c-5.4 5.4-8.4 12.7-8.4 20.3v230.7c0 54.3 44 98.3 98.3 98.3h103.3c10.4 0 18.9-8.4 18.9-18.9V640.7c0-11.4 14.1-16.5 24.2-16.5h152.3c11.6 0 24.2 6.3 24.2 16.5v255.9c0 10.4 8.4 18.9 18.9 18.9h103.3c54.3 0 98.3-44.1 98.3-98.3V586.5c0-7.6-3-14.9-8.4-20.3L526 265.9c-6.7-6.7-17.4-6.7-24.1 0L201.6 566.2z" fill="#f8f9fa" /></svg>
      </a>
      <a className="brand-name" href="https://ilyas-soa.site123.me">
        <img src="../../LOGO.png" alt="Ilyas Ab" width="40" height="40" style={{ borderRadius: '50%' }} />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu" 
          
        }
        style={{ position: 'absolute', right: '0' }}
      >
        <ul>
          <li>
            <a href="/BAM">LA BOÎTE À MERVEILLES</a>
          </li>
          <li>
            <a href="/ANT">ANTIGONE</a>
          </li>
          <li>
            <a href="/DJC">LE DERNIER JOUR D'UN CONDAMNÉ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
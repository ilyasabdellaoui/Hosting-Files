import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="https://arabooks.vercel.app" className="footer-link">
            <img src="../../logorounded.png" alt="Logo" />
          </a>
        </div>
        <div className="footer-sections">
        <div className="footer-section-1">
          <span>&copy; {new Date().getFullYear()} AraBooks</span>
        </div>
        <div className="footer-section-2">
          <span>Developed by </span>
          <a href="https://www.linkedin.com/in/ilyas-abdellaoui/" className="footer-link">
            Ilyas Ab
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

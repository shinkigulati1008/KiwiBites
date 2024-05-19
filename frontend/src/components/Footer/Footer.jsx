import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

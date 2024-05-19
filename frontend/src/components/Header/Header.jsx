import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="left-menu">
        <div className="menu-icon">&#9776;</div>
        <div className="logo"><img src={Logo} alt="Kiwi Bites"/></div>
      </div>
      <div className="right-menu">
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

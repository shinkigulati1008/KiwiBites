import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

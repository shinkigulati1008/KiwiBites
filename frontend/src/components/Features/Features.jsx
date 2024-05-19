import React from 'react';
import './Features.css';
import feature1 from '../../assets/feature1.png'
import feature2 from '../../assets/feature2.png'
import feature3 from '../../assets/feature3.png'

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature">
          <img src={feature1} alt="Wide Variety of Restaurants" />
          <h2>Wide Variety of Restaurants</h2>
          <p>Choose from a wide range of restaurants offering various cuisines.</p>
        </div>
        <div className="feature">
          <img src={feature2} alt="Easy and Fast Ordering" />
          <h2>Easy and Fast Ordering</h2>
          <p>Order your favorite dishes with just a few clicks.</p>
        </div>
        <div className="feature">
          <img src={feature3} alt="Real-Time Order Tracking" />
          <h2>Real-Time Order Tracking</h2>
          <p>Track your order in real-time from preparation to delivery.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

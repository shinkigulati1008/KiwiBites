import React, { useEffect, useState } from 'react';
import './Restaurant.css';
import axios from 'axios';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(response => {
        if (Array.isArray(response.data)) {
          setRestaurants(response.data);
        } else {
          setError('Failed to fetch restaurants');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
        setError('There was an error fetching the restaurants!');
      });
  }, []);

  return (
    <div className="restaurant-page">
      <div className="container">
        <h1>Restaurants</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="restaurant-list">
          {restaurants.map(restaurant => (
            <div className="restaurant-card" key={restaurant.restaurant_id}>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.address}</p>
              {/* Add any other fields you have */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;

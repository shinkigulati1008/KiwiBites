import React, { useState } from 'react';
import './Checkout.css';
import axios from 'axios';

function Checkout() {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/orders', orderDetails);
      setSuccess('Order placed successfully!');
      setError('');
      setOrderDetails({
        name: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      });
    } catch (err) {
      setError('Failed to place the order. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleCheckout}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={orderDetails.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={orderDetails.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={orderDetails.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={orderDetails.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={orderDetails.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={orderDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

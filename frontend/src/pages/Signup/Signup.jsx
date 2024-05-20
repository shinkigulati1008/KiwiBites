import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/signup', formData);
        console.log('User registered successfully:', response.data);
        toast.success('User registered successfully!');
        navigate('/login');
      } catch (error) {
        console.error('Error registering user:', error.response.data.error);
        toast.error('Error registering user. Please try again.');
      }
    };
  
    return (
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Signup</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
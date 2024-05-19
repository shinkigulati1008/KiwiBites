import React, { useState } from 'react';
import './User.css';

function User() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    cart: [
      { id: 1, name: 'Item 1', quantity: 2, price: 10 },
      { id: 2, name: 'Item 2', quantity: 1, price: 15 },
      { id: 3, name: 'Item 3', quantity: 3, price: 20 }
    ]
  });

  const handleIncrement = (itemId) => {
    const updatedCart = userData.cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setUserData(prevState => ({ ...prevState, cart: updatedCart }));
  };

  const handleRemove = (itemId) => {
    const updatedCart = userData.cart.filter(item => item.id !== itemId);
    setUserData(prevState => ({ ...prevState, cart: updatedCart }));
  };

  return (
    <div className="user-page">
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {userData.cart.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.price}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default User;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/forgot.css'; // Create this CSS file as needed

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://collabkeys-backend.onrender.com/api/auth/request-reset', { email }); // Update with your API endpoint
      setMessage('A password reset link has been sent to your email.');
    } catch (error) {
      setMessage('Error: Could not send reset link. Please try again later.');
    }
  };

  return (
    <div className="ForgotPassword-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="ForgotPassword-form">
        <label>Email Address:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/reset.css'; // Create this CSS file as needed

const ResetPassword = () => {
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    console.log("Token being sent:", token);

    try { 
      const response = await axios.post(
        `https://collabkeys-backend.onrender.com/api/auth/reset-password/${token}`,
        JSON.stringify({ password }),
        {headers: { "Content-Type": "application/json" }}); // Update with your API endpoint 
    
      setMessage(response.data.message); 
      console.log('Response:', response.data);
      
      setLoading(true);

      // Redirect to login page after successful reset
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      } catch (error) {
         setMessage('Error: Could not reset password. Please try again later.');
          console.error('Error response:', error.response ? error.response.data : error.message); 
        }
     };

  return (
    <div className="ResetPassword-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="ResetPassword-form">
        <label>New Password:</label>
        <input
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm New Password:</label>
        <input
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Reset Password</button>
      </form>
      {message && <p>{message}</p>}

       {/* Show loading animation when redirecting */}
       {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Redirecting to login...</p>
        </div>
      )}

    </div>
  );
};

export default ResetPassword;

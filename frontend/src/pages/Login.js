// LoginForm.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 
import Logo from "../img/log.svg"
import LightLogo from "../img/Light-logo.png";
import axios from 'axios';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request
      const response = await axios.post('https://collabkeys-backend.onrender.com/api/auth/login', { email, password: password.trim() });

      // Save token and user name to local storage on successful login
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to home and refresh to update Navbar
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
  <div className="Login-container">
    <img className="login-image" src={Logo} width="700" height="auto" alt="Login illustration" />

    <form className="Login-form" onSubmit={handleSubmit}>
    <img id="form-logo" src={LightLogo} width="200px" height="auto" alt="Logo" />
      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <i
          onClick={handleTogglePassword}
          className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          id="togglePassword"
      ></i>
      <span className="fPass" id="Forgot"><Link to="/forgot">Forgot Password?</Link></span>
      <span className="span" id="RegisterBtn">
        Don't have an account?  <Link to ="/register">Register</Link>
      </span>
      <button type="submit" className="LBtn" style={{ alignItems: "center" }}>
        Login
      </button>
    </form>
  </div>
  );
};

export default LoginForm;



// RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Registeration.css'; // Assume your styles are here
import Scanner from "../img/scanner.png"
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    rollNumber: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    year: '',
    transactionID: ''
  });
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('https://collabkeys-backend.onrender.com/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      navigate('/Login');
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register-Form</h2>
        
        <label>Full Name</label>
        <input type="text" name="fullName" placeholder="Name" value={formData.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="tel" name="contactNumber" maxLength="10" placeholder="(+91) Phone Number" value={formData.contactNumber} onChange={handleChange} required />

        <label>Roll Number</label>
        <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />

        <label>Password</label>
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Set Password" value={formData.password} onChange={handleChange} required />
          <i onClick={togglePasswordVisibility} className={`fa ${showPassword ? "fa-regular fa-eye-slash" : "fa-eye"}`} />
        </div>

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input type="date" name="dob" min="2000-01-01" max="9999-12-31" value={formData.dob} onChange={handleChange} required />

        <label>Gender</label>
        <div className='g'>
          <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required /> Male</label>
          <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required /> Female</label>
        </div>

        <label>Year</label>
        <div className='y'>
          <label><input type="radio" name="year" value="2" checked={formData.year === "2"} onChange={handleChange} required /> 2nd</label>
          <label><input type="radio" name="year" value="3" checked={formData.year === "3"} onChange={handleChange} required /> 3rd</label>
        </div>

        <div className="qr-section">
          <img src={Scanner} alt="QR Code" />
          <label>Transaction ID</label>
          <input type="text" name="transactionID" placeholder="Transaction ID" value={formData.transactionID} onChange={handleChange} />
        </div>

        <button type="submit" className="RBtn">Register</button>
      </form>
    </div>
    </>
  );
};

export default RegisterForm;

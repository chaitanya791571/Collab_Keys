const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendWelcomeEmail, sendResetPasswordEmail } = require('../services/emailService'); // Import the email service
const eventsData = require('../data/events.json'); 

// Load environment variable for JWT secret
const JWT_SECRET = process.env.JWT_SECRET ;

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, contactNumber, rollNumber, password, dob, gender, year, transactionID } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({
      fullName,
      email,
      contactNumber,
      rollNumber,
      password: hashedPassword,
      dob,
      gender,
      year,
      transactionId:transactionID,
    });

    await newUser.save();
    // Send welcome email with an image
    sendWelcomeEmail(email, fullName);
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the entered password matches the stored hashed password
    const isMatch = await bcrypt.compare(password.trim(), user.password); // Trim password before comparison
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token including the isAdmin property
    const token = jwt.sign(
      { userId: user._id, email: user.email, rollNumber: user.rollNumber, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '5h' }
    );


    // Send token and user details to frontend
    res.json({
      token,
      user: {
        name: user.fullName,
        email: user.email,
        rollNumber: user.rollNumber,
        isAdmin: user.isAdmin,
        approved:user.approved,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// Request Password Reset Route
router.post('/request-reset', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = await bcrypt.hash(resetToken, 10);

    // Save the hashed token and set an expiration time
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
    await user.save();

    // Correcting the reset URL
    const resetUrl = `https://collabkeys.onrender.com/reset-password/${resetToken}`;

    // Ensure fullName is passed (defaulting to 'User' if not available)
    sendResetPasswordEmail(email, user.fullName || 'User', resetUrl);

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    res.status(500).json({ message: 'Error requesting password reset', error });
  }
});


// Password Reset Route
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log('Recieved token:',token);
  console.log('Recieved password:',password);
  if (!token || !password) {
    return res.status(400).json({ message: 'Token and password are required' });
  }

  try {
    const user = await User.findOne({
      resetPasswordToken: { $exists: true },
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    //Check if token is expired
    if (Date.now() > user.resetPasswordExpires) {
      return res.status(400).json({ message: 'Token expired' });
    }
    // Log the stored hashed token
    console.log('Stored hashed token:', user.resetPasswordToken);

    // Validate the token
    const isValid = await bcrypt.compare(token, user.resetPasswordToken);
    if (!isValid) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password.trim(), 10); // Trim password to remove any extraneous spaces

    // Update the user's password and remove the reset token and expiration
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // Save the updated user password
    await user.save();

    // Re-fetch the updated user to verify the password update
    const updatedUser = await User.findOne({ email: user.email });
    console.log('Updated user password in DB:', updatedUser.password);

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Error resetting password', error });
  }
});
//Event Route
router.get('/events', (req, res) => {
  res.json(eventsData);
});
router.get('/events', (req, res) => {
  try {
    const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf8'));
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});
module.exports = router;

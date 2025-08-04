// backend/routes/user.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId); // Ensure `userId` comes from the decoded token
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the user is approved
    if (!user.approved) {
      return res.status(403).json({ message: 'User not approved' });
    }

    // Send user data
    res.json({
      name: user.fullName,
      email: user.email,
      rollNumber: user.rollNumber,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data', error });
  }
});

router.get('/unapproved', async (req, res) => {
  try {
    // Find all users where `approved` is false
    const unapprovedUsers = await User.find({ approved: false });
    
    if (unapprovedUsers.length === 0) {
      return res.status(404).json({ message: 'No unapproved users found' });
    }

    res.json(unapprovedUsers);
  } catch (error) {
    console.error('Error fetching unapproved users:', error);
    res.status(500).json({ message: 'Error fetching unapproved users', error });
  }
});

router.put('/:userId/approve', async (req, res) => {
  try {
    // Find the user by ID and update `approved` status to true
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { approved: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User approved successfully', user });
  } catch (error) {
    console.error('Error approving user:', error);
    res.status(500).json({ message: 'Error approving user', error });
  }
});

module.exports = router;

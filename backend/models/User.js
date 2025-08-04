const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  rollNumber: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  year: { type: String, enum: ['2', '3'], required: true },
  transactionId: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  approved: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false }, 
});

// Hash password before saving if it's new or modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const isAlreadyHashed = /^\$2[ayb]\$.{56}$/.test(this.password);
    if (!isAlreadyHashed) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Compare input password with stored hashed password
userSchema.methods.comparePassword = function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

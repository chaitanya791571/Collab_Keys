const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, subject, html, attachments = []) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
    attachments,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

const sendWelcomeEmail = (email, fullName) => {
  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to CollabKeys Tech Club!</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      
    }
    .container {
      width: 100%;
      max-width: 600px;
      position: relative;
      top: auto;
      margin: auto;
      padding: 10px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #0D6EFD;
      text-align: center;
      font-family: "Marck Script", cursive;
      font-size: 42px;
      font-weight: bold;
      margin-top: 0;
    }
    h2 {
      color: #343A40;
      text-align: center;
    }
    .content {
      font-size: 16px;
      color: #343A40;
      line-height: 1.5;
      text-align: center;
      margin-top: 20px;
    }
    .cta {
      display: block;

      padding: 10px;
      margin-top: 20px;
      background-color: #0D6EFD;
      color: #000000;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
    }
    .cta:hover {
      background-color: #084298;
    }
    footer {
      text-align: center;
      font-size: 12px;
      color: #6c757d;
      margin-top: 30px;
    }
    footer a{
      text-decoration: none;
      color: #00bbff;
    }
    footer a:hover{
      transition: all 0.8s ease;
      text-decoration: underline;
      color: rgba(43, 152, 152, 0.756);
    }
    .highlight {
      font-weight: bold;
    }
    img{
      position: relative;left: 150px;
    }
    @media (max-width:500px){
      h1 { font-size: 32px; }
      .content { font-size: 14px; }
      .container{width: 70%;}
      .container img{width: 200;position:relative;left:20px;}
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="../Desktop/Screenshot_2024-11-11_230024-removebg-preview.png" alt=""width="300" >
    <h1>🚀Welcome🎉</h1>
    <h2>Your Tech Journey Begins Here</h2>
    <div class="content">
      <p>Hi <span class="highlight">${fullName}</span>,</p>
      <p>Welcome to <strong>CollabKeys Tech Club</strong>! We're excited to have you in our community of tech enthusiasts, creators, and coders.</p>
      <p><strong>Stay Updated!</strong> Look out for exclusive updates, event invites, and contests in your inbox.</p>
      <p><strong>Have Questions or Feedback?</strong> Just hit "Reply" to reach us.</p>
      <a href="#" class="cta">Get Started</a>
    </div>
    <footer>
      <p>We can't wait to see your creativity and ambition in action!</p>
      <p>Warm regards,<br>CollabKeys Tech Club<br><em>Igniting Innovation. Empowering Students.</em></p>
      <p>Connect with us on <strong><a href="#">CollabKeys</a></strong> to stay inspired!</p>
    </footer>
  </div>
</body>
</html>

  `;
  sendEmail(email, 'Welcome to CollabKeys', html); // attachments
};

const sendResetPasswordEmail = (email,fullName='User', resetUrl) => {
  if(!email||!resetUrl){
    throw new Error('Email and reset URL are required');
  }
  const html = `
    <p>Hello 👋 ${fullName},</p>
    <p>You requested a password reset</p>
    <p>Click this link to reset your password: <a href="${resetUrl}">Reset Password</a></p>
    <p><u>Note:</u>The link will expire in 1 hour for security reasons.</p>
    <p>If you didn't request a password reset, you can ignore this email.</p>`;

  sendEmail(email, 'Password Reset Request', html);
};

module.exports = {
  sendWelcomeEmail,
  sendResetPasswordEmail,
};

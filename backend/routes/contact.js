// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, category } = req.body;

    // Save to DB
    const contact = new Contact({ name, email, subject, message, category });
    await contact.save();

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose email content
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `[Contact Form] ${subject} (${category})`,
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}
Category: ${category}
Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
});

module.exports = router;

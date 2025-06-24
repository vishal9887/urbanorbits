const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');

router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ _id: -1 });
    console.log('FAQs fetched:', faqs);  // << Add this line to log results
    res.json(faqs);
  } catch (err) {
    console.error('Error fetching FAQs:', err);  // << Detailed error log
    res.status(500).json({ message: 'Server error fetching FAQs' });
  }
});

module.exports = router;

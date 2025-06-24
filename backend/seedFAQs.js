const mongoose = require('mongoose');
const FAQ = require('./models/FAQ'); // Adjust the path if needed
require('dotenv').config();

const faqs = [
  {
    question: "What is Urban Orbit and how does it help businesses grow?",
    answer:
      "Urban Orbit is a digital transformation agency based in India that helps businesses and startups globally build lasting brands. We provide branding, website development, marketing automation, and e-commerce solutions — blending tech, design, and emotional strategy to scale your business with clarity and ease.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes! While we’re proudly India-based, we aim to work with global clients across the US, UK, Canada, UAE, and more. Our systems and services are built to support remote collaboration and deliver results for businesses in any part of the world.",
  },
  {
    question: "What services does Urban Orbit specialize in?",
    answer:
      `We offer a full suite of digital growth services, including:
      Branding & identity systems
      Website design & development
      Email marketing & funnel automation
      E-commerce setup and optimization
      Digital marketing strategy for performance and positioning`,
  },
  {
    question: "How is Urban Orbit different from other digital agencies?",
    answer:
      "Urban Orbit focuses on intentional, emotionally intelligent branding — not templates or trends. We co-dream with founders, delivering personalized strategies that reflect your story and drive long-term digital growth, both in India and globally.",
  },
  {
    question: "Can Urban Orbit build a website that’s optimized for SEO and conversions?",
    answer:
      "Absolutely. Our websites are built with modern UX design, mobile responsiveness, fast load speeds, and on-page SEO optimization — to help you rank higher on search engines and convert visitors into customers.",
  },
];

const seedFAQs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await FAQ.deleteMany({});
    console.log('Existing FAQs cleared');

    await FAQ.insertMany(faqs);
    console.log('✅ FAQ seed data inserted');

    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error('Error seeding FAQs:', error);
    process.exit(1);
  }
};

seedFAQs();

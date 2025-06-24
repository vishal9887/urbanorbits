const mongoose = require('mongoose');
const Blog = require('./models/Blog');
require('dotenv').config();

const seedBlogs = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Blog.deleteMany();

  await Blog.insertMany([
    {
      title: 'Branding in 2025',
      slug: 'branding-2025',
      content: 'Future branding strategies explained...',
      category: 'Branding',
      tags: ['branding', 'future'],
      author: 'Urban Orbit',
      coverImage: 'https://via.placeholder.com/600x300?text=Branding+2025',
    },
    {
      title: 'Automation Hacks',
      slug: 'automation-hacks',
      content: 'How to automate your startup marketing...',
      category: 'Automation',
      tags: ['automation', 'marketing'],
      author: 'Urban Orbit',
      coverImage: 'https://via.placeholder.com/600x300?text=Automation',
    },
  ]);

  console.log('✅ Dummy blogs seeded');
  mongoose.disconnect();
};

seedBlogs();

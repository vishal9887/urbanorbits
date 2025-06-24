const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  category: String,
  tags: [String],
  author: String,
  coverImage: String,
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);

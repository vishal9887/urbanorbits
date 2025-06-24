const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const { category, tag } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (tag) filter.tags = tag;

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

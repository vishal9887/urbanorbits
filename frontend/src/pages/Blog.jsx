import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://urban-u3jp.onrender.com/api/blogs${category ? `?category=${category}` : ''}`
      );
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Our Blogs</h1>

      <div className="flex justify-center mb-6">
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Branding">Branding</option>
          <option value="Automation">Automation</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-700 dark:text-gray-200">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-700 dark:text-gray-200">No blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{blog.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">By {blog.author}</p>
              <p className="text-gray-700 dark:text-gray-300">
                {blog.content?.substring(0, 100)}...
              </p>
              <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">{blog.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;

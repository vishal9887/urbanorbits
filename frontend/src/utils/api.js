import axios from 'axios';

const API_BASE = 'https://urban-u3jp.onrender.com/api';

export const fetchBlogs = async (params = {}) => {
  const res = await axios.get(`${API_BASE}/blogs`, { params });
  return res.data;
};

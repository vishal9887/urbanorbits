require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running...');
});

// Other routes
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/faqs', require('./routes/faq'));

const contentRoutes = require("./routes/contentRoutes");
app.use("/api", contentRoutes);// **Add this line to fix your problem:**
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

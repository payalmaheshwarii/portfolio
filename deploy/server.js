const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes (if needed for contact form)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you can add your email logic or save to database
  console.log('Contact form submission:', { name, email, subject, message });
  
  // For now, just return success
  res.json({ 
    success: true, 
    message: 'Message received successfully' 
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
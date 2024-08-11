const express = require('express');
const axios = require('axios');
const router = express.Router();

// POST endpoint to handle keyword analysis
router.post('/analyze', async (req, res) => {
  const { keyword } = req.body;

  try {
    // Make a request to the keyword research API using axios
    const response = await axios.get('https://api.example.com/keyword-research', {
      params: { query: keyword },
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`  // Replace with your actual API key
      }
    });

    // Assuming the API returns data in a JSON format
    const data = response.data;

    // Send back the keyword analysis result
    res.json({ result: data });
  } catch (error) {
    console.error('Error fetching keyword data:', error);
    res.status(500).json({ error: 'An error occurred while analyzing the keyword.' });
  }
});

module.exports = router;


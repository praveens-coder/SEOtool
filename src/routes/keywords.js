const express = require('express');
const router = express.Router();

// POST endpoint to handle keyword analysis
router.post('/analyze', (req, res) => {
  const { keyword } = req.body;
  // Basic response to check if the endpoint is working
  res.json({ result: `Analysis for ${keyword}` });
});

module.exports = router;

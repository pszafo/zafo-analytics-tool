const express = require('express');
const { interpretQuery } = require('../services/nlpService');
const { performAnalytics } = require('../services/analyticsService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { query } = req.body;
  try {
    const interpretedQuery = await interpretQuery(query);
    const results = await performAnalytics(interpretedQuery);
    res.json(results);
  } catch (error) {
    console.error('Error processing search query', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

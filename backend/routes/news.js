const express = require('express');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('65249a791bbe4db985c0256d1e855f32');
const router = express.Router();

// Endpoint for Stock Market News (Top Headlines)
router.get('/top-headlines', async (req, res) => {
  try {
    const { category } = req.query;
    const response = await newsapi.v2.topHeadlines({
      category: category || 'business',
      language: 'en',
      country: 'us',
    });
    res.json(response.articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

// Endpoint for Searching News (Everything)
router.get('/everything', async (req, res) => {
  try {
    const { q } = req.query;
    const response = await newsapi.v2.everything({
      q: q || 'stock market',
      language: 'en',
      sortBy: 'publishedAt',
    });
    res.json(response.articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

module.exports = router;

const express = require('express');
const NewsAPI = require('newsapi');
const cors = require('cors');

const app = express();
const port = 5000;

// NewsAPI key
const newsapi = new NewsAPI('65249a791bbe4db985c0256d1e855f32'); // NewsAPI key

app.use(cors());

// Endpoint for Stock Market News (Top Headlines)
app.get('/api/news/top-headlines', async (req, res) => {
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
app.get('/api/news/everything', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
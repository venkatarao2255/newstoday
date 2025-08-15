const express = require('express');
const NewsAPI = require('newsapi');
const cors = require('cors');

const app = express();
const port = 5000;

const newsapi = new NewsAPI('65249a791bbe4db985c0256d1e855f32');

app.use(cors());


app.get('/api/news/top-headlines', async (req, res) => {
    try {
        const { category } = req.query;
        console.log(`📡 Fetching category: ${category || 'business'}`);

        const response = await newsapi.v2.topHeadlines({
            category: category || 'business',
            language: 'en',
            country: 'us',
            pageSize: 10
        });

        res.json(response.articles || []);
    } catch (error) {
        console.error("Top headlines error:", error);
        res.status(500).json({ error: 'Error fetching news' });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});

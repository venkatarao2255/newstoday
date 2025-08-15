import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('business');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async (cat) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/news/top-headlines?category=${cat}`);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="App">
      <header>
        <h1>📰 NewsToday</h1>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </header>

      <main className="news-container">
        {loading ? (
          <p>Loading news...</p>
        ) : articles.length === 0 ? (
          <p>No news available.</p>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage || 'https://via.placeholder.com/300x180'} alt={article.title} />
              <div className="content">
                <h3>{article.title}</h3>
                <p>{article.description || ''}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default App;

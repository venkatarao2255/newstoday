import React, { useEffect, useState } from "react";
import "./App.css";

const categories = ["business", "technology", "sports", "entertainment", "science", "health"];

function App() {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem("lastCategory") || "business");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?category=${selectedCategory}&country=us&apiKey=65249a791bbe4db985c0256d1e855f32`)
            .then((res) => res.json())
            .then((data) => setArticles(data.articles || []))
            .catch((err) => console.error(err));

        localStorage.setItem("lastCategory", selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="app-container">
            <header className="header">NEWS TODAY</header>

            <div className="category-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={selectedCategory === cat ? "active" : ""}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {articles.length > 0 && (
                <div className="hero-article">
                    {articles[0].urlToImage && <img src={articles[0].urlToImage} alt={articles[0].title} />}
                    <div className="hero-text">
                        <h2>{articles[0].title}</h2>
                        <p>{articles[0].description}</p>
                        <div className="card-footer">
                            <a href={articles[0].url} target="_blank" rel="noreferrer">Read Full Story</a>
                        </div>
                    </div>
                </div>
            )}

            <div className="news-grid">
                {articles.slice(1).map((article, index) => (
                    <div key={index} className="news-card">
                        {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <div className="card-footer">
                            <a href={article.url} target="_blank" rel="noreferrer">Read</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

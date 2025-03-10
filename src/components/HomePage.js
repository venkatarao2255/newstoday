import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsList from "./NewsList";
import "../HomePage.css";

const HomePage = () => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("business");
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const endpoint = query
                    ? `http://localhost:5000/api/news/everything?q=${query}`
                    : `http://localhost:5000/api/news/top-headlines?category=${category}`;
                const response = await axios.get(endpoint);
                setNews(response.data);
                setError("");
            } catch (error) {
                setError("Failed to fetch news. Please try again later.");
            }
        };
        fetchNews();
    }, [category, query]);

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date();
            setTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <div>
           

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
                aria-label="Toggle Dark Mode"
            >
                {isDarkMode ? "☀️" : "🌙"}
            </button>

            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="container">
                <h1>Today's News</h1>

                {/* Category Dropdown */}
                <div className="select-input-container">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search for news..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* News List */}
                <NewsList articles={news} />
            </div>
        </div>
    );
};

export default HomePage;

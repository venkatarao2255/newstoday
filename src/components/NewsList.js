import React from 'react';

const NewsList = ({ articles }) => {
    if (!articles || articles.length === 0) return <p>No news available</p>;

    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <a href={article.url} target="_blank" rel="noopener noreferrer" key={index}>
                    <img
                        src={article.urlToImage || 'https://via.placeholder.com/150'}
                        alt={article.title}
                    />
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </a>
            ))}
        </div>
    );
};

export default NewsList;

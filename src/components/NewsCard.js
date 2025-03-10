import React from 'react';

const NewsList = ({ articles }) => {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className="news-article">
                    {/* Check if the article has an image and display it */}
                    {article.urlToImage && (
                        <img src={article.urlToImage} alt={article.title} className="news-article-image" />
                    )}
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </>
    );
};

export default NewsList;

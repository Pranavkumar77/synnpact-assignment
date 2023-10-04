import React from 'react';
import './App.css' 
import { formatDate } from './Utils';

const Article = ({ article }) => {

  return (
    <div className="article-card">
      <div className="image-container">
        <img
          className="article-image"
          src={article.node.field_photo_image_section}
          alt={article.node.title}
        />
      </div>
      <div className="content-container">
        <h2 className="article-title">{article.node.title}</h2>
        <p className="last-updated">
          Last Update: {formatDate(article.node.last_update)}
        </p>
      </div>
    </div>
  );
};

export default Article;

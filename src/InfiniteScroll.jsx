import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './Article';

const InfiniteScroll = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseUrl = 'http://localhost:5000/api/articles/';

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiBaseUrl + page);
      const { nodes } = response.data;
      console.log(nodes)
      if (nodes && nodes.length > 0) {
        setArticles((prevArticles) => [...prevArticles, ...nodes]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error('Error in api response', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const handleScroll = () => {
    if (
      !isLoading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      fetchArticles();
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.nid} article={article} />
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;

import React, { useEffect, useState } from 'react';
import { ArticleType } from '../../types';
import { LatestNewsItem } from '../LatestNewsItem';
import './LatestNewsList.scss';
import { Service } from '../../api/service';

export const LatestNewsList: React.FC = () => {
  const [lastNews, setLastNews] = useState<ArticleType[]>([]);

  const fetchLatestNews = async () => {
    try {
      const data = await Service.getLatestNews();

      setLastNews(data);
    } catch (error) {
      throw new Error('Downloading error');
    }
  };

  useEffect(() => {
    fetchLatestNews();
  }, []);

  return (
    <div className="news-list">
      <p className="news-list__title">Our Latest News</p>

      {lastNews.map((article) => (
        <LatestNewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

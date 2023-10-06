import React from 'react';
import { Article } from '../../components/Article';
import { LatestNewsList } from '../../components/LatestNewsList';
import './Blog.scss';

export const Blog: React.FC = () => (
  <div className="blog">
    <div className="blog__container">
      <div className="blog__news-wrapper">
        <Article />
        <LatestNewsList />
      </div>
    </div>
  </div>
);

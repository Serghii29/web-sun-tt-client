import React from 'react';
import { LatestNewsItem } from '../LatestNewsItem';
import './LatestNewsList.scss';

export const LatestNewsList = () => (
  <div className="news-list">
    <p className="news-list__title">Our Latest News</p>

    <LatestNewsItem />
    <LatestNewsItem />
    <LatestNewsItem />
  </div>
);

import React from 'react';
import { Article } from '../../components/Article';
import './Blog.scss';

export const Blog: React.FC = () => (
  <div className="blog">
    <div className="blog__container">
      <Article />
    </div>
  </div>
);

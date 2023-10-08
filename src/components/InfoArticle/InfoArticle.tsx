/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { format } from 'date-fns';
import { ArticleType } from '../../types';
import './InfoArticle.scss';

type Props = {
  article: ArticleType;
};

export const InfoArticle: React.FC<Props> = ({ article }) => {
  const {
    category,
    title,
    createdAt,
    author,
    time,
    img,
  } = article;

  return (
    <div className="info-article">
      <img src={img} alt="article photo" className="info-article__img" />

      <p className="info-article__category">
        {category}
      </p>

      <p className="info-article__title">
        {title}
      </p>

      <div className="info-article__information-block">
        <span className="info-article__data">
          {format(new Date(createdAt), 'dd MMM yyyy')}
        </span>

        <span className="info-article__author">{author}</span>

        <div className="info-article__time-read">
          <img
            src="./icons/clock.svg"
            alt="icon clock"
            height="12px"
            className="info-article__clock"
          />
          <span>
            {time}
            {' '}
            min read
          </span>
        </div>
      </div>
    </div>
  );
};

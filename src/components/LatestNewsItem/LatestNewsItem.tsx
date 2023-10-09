import React from 'react';
import { format } from 'date-fns';
import { ArticleType } from '../../types';
import './LatestNewsItem.scss';

type Props = {
  article: ArticleType;
};

export const LatestNewsItem: React.FC<Props> = ({ article }) => {
  const { title, createdAt, img } = article;

  const preparedTitle = title?.slice(0, 40);

  return (
    <div className="news-item">
      <img src={img} alt="news poster" className="news-item__img" />

      <div className="news-item__info-block">
        <p className="news-item__title">{preparedTitle}</p>

        <p className="news-item__data">
          {format(new Date(createdAt), 'dd MMM yyyy')}
        </p>
      </div>
    </div>
  );
};

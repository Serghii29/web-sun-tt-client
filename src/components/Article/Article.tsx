/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Service } from '../../api/service';
import { ArticleType } from '../../types';
import './Article.scss';

export const Article: React.FC = React.memo(() => {
  const [article, setArticle] = useState<ArticleType | null>(null);

  const preparedText = article?.text.slice(0, 350);
  const preparedTitle = article?.title.slice(0, 40);

  const fetchRandom = async () => {
    try {
      const data = await Service.getRandomArticle();

      setArticle(data);
    } catch (error) {
      throw new Error('Downloading error');
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div className="article">
      <img src={article?.img} alt="image" className="article__image" />

      <div className="article__descriptoin">
        <p className="article__category">{article?.category}</p>

        <p className="article__title">{preparedTitle}</p>

        <p className="article__text">{preparedText}</p>

        <div className="article__info-block">
          <p className="article__data">
            {format(new Date(article?.createdAt || 0), 'dd MMM yyyy')}
          </p>

          <p className="article__author">{article?.author}</p>

          <div className="article__time-read">
            <img src="./icons/clock.svg" alt="icon clock" height="12px" />
            <p>
              {article?.time}
              {' '}
              min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

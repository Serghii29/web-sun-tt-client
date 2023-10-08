import React, { ChangeEvent, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
// import { Article } from '../../components/Article';
// import { LatestNewsList } from '../../components/LatestNewsList';
import './Blog.scss';
import { ArticleType } from '../../types';
import { Service } from '../../api/service';
import { InfoArticle } from '../../components/InfoArticle';

export const Blog: React.FC = () => {
  const [articles, setArticle] = useState<ArticleType[]>([]);
  const [page, setPage] = useState(1);

  const getArticles = async () => {
    try {
      const data = await Service.fetchArticlesByPage(page);

      setArticle(data);
    } catch (error) {
      throw new Error('Downloading error');
    }
  };

  useEffect(() => {
    getArticles();
  }, [page]);

  const handlerPageChange = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  return (
    <div className="blog">
      <div className="blog__container">
        {/* <div className="blog__news-wrapper">
          <Article />
          <LatestNewsList />
        </div> */}

        <div className="blog__pagination">
          {articles.map((article) => (
            <InfoArticle key={article.id} article={article} />
          ))}
        </div>

        <Pagination count={5} color="primary" onChange={handlerPageChange} />
      </div>
    </div>
  );
};

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Article.scss';

export const Article: React.FC = React.memo(() => (
  <div className="article">
    {/* <img
      src="./images/beautiful-girl-is-engaged-yoga-studio.jpg"
      alt="image"
    /> */}

    <div className="article__descriptoin">
      <p className="article__category">Pharmaceuticals</p>

      <p className="article__title">
        A Sure Way To Get Rid Of Your Back Ache Problem
      </p>

      <span className="article__text">
        If you have tried everything, but still seem to suffer from snoring,
        don’t give up. Before turning to surgery, consider shopping for
        anti-snore devices. These products do not typically require a
        prescription, are economically priced and may just be the answer that
        you are looking for. However, as is the case when shopping for anything,
        there are a lot of anti-snore devices out there and…
      </span>

      <div className="article__info-block">
        <p className="article__data">28 Feb 2021</p>

        <p className="article__author">Jim Sullivan</p>

        <div className="article__time-read">
          <img src="./icons/clock.svg" alt="icon clock" height="12px" />
          <p>6 min read</p>
        </div>
      </div>
    </div>
  </div>
));

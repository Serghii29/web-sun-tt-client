import React from 'react';
import './SloganCompany.scss';

export const SloganCompany: React.FC = React.memo(() => (
  <div className="slogan">
    <a href="/">
      <img
        src="./images/logo.png"
        alt="company logo"
        className="slogan__img"
      />
    </a>

    <p className="slogan__text">
      Lorem ipsum dolor sit amet, consectetur
      <br />
      adipiscing elit. Cras blandit tincidunt ut sed.
      <br />
      Velit euismod integer convallis ornare eu.
    </p>
  </div>
));

import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import './Header.scss';

export const Header: React.FC = React.memo(() => (
  <header className="header">
    <div className="header__contaner">
      <div className="header__info_block">
        <Link to="/">
          <img src="./images/logo.svg" alt="company logo" />
        </Link>

        <div>
          <p className="header__help">Need Help?</p>
          <a className="header__tel" href="tel:(514) 543-9936">(514) 543-9936</a>
        </div>
      </div>

      <NavBar />
    </div>
  </header>
));

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = React.memo(() => (
  <div className="nav">
    <NavLink
      to="/"
      className="nav__link"
    >
      Home
    </NavLink>

    <div className="nav__link">
      <span>
        Services
      </span>
    </div>

    <div className="nav__link">
      <span>
        About
      </span>
    </div>

    <NavLink
      to="/booknow"
      className="nav__link"
    >
      Book now
    </NavLink>

    <div>
      <span className="nav__link">
        Shop
      </span>
    </div>

    <NavLink
      to="/blog"
      className="nav__link"
    >
      Blog
    </NavLink>

    <NavLink
      to="/contact"
      className="nav__link"
    >
      Contact
    </NavLink>
  </div>
));

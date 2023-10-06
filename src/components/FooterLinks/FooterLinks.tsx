/* eslint-disable react/prop-types */
import React from 'react';
import { Links } from '../../types';
import './FooterLinks.scss';

type Props = {
  links: Links;
  title: string;
};

export const FooterLinks: React.FC<Props> = React.memo(({
  links,
  title,
}) => (
  <div className="links">
    <p className="links__title">{title}</p>
    <ul>
      {links.map((link) => (
        <li key={link.title}>
          <a className="links_item" href={link.link}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div>
));

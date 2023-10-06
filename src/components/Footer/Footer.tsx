import React from 'react';
import { SloganCompany } from '../SloganCompany/SloganCompany';
import { Links } from '../../types';
import { ContactDetails } from '../ContactDetails';
import { FooterLinks } from '../FooterLinks';
import './Footer.scss';

const departments: Links = [
  { title: 'Medical', link: '/' },
  { title: 'Pharmaceuticals', link: '/' },
  { title: 'Medical Equipment', link: '/' },
];

const quickLinks: Links = [
  { title: 'What do we do?', link: '/' },
  { title: 'Our expertise', link: '/' },
  { title: 'Request an Appointment', link: '/' },
  { title: 'Book with a Specialist', link: '/' },
];

export const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__info-wrapper">
        <FooterLinks title="Departments" links={departments} />
        <FooterLinks title="Quick Links" links={quickLinks} />
        <ContactDetails />

        <SloganCompany />
      </div>

      <p className="footer__rights">
        ©2021 All Rights Reserved
      </p>
    </div>
  </div>
);

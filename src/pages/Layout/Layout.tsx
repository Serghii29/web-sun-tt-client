import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import './Layout.scss';

export const Layout: React.FC = () => (
  <div className="layout">
    <Header />

    <div className="container">
      <Outlet />
    </div>

    <Footer />
  </div>
);

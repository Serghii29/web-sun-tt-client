import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import './Layout.scss';

export const Layout: React.FC = () => (
  <div className="layout">
    <Header />
    <div className="container">
      <Outlet />
    </div>
  </div>
);

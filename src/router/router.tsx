import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Blog } from '../pages/Blog';
import { BookNow } from '../pages/BookNow';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Layout } from '../pages/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'booknow',
        element: (
          <ProtectedRoute>
            <BookNow />
          </ProtectedRoute>
        ),
      },

      {
        path: 'blog',
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
      },
      {
        path: 'contact',
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

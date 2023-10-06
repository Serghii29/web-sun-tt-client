import React from 'react';

type Props = {
  children: React.JSX.Element;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => (
  <div>
    { children }
  </div>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GithubUsersApp } from './GithubUsersApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubUsersApp />
    </BrowserRouter>
  </React.StrictMode>
);

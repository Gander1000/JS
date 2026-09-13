import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ProgressProvider } from './hooks/useProgress.js';
import './styles/variables.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </React.StrictMode>,
);
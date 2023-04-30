import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './buttons/Buttons';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);
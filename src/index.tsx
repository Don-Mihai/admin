import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/index';

// Рендеринг
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

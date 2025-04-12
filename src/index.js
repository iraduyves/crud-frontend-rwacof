import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductProvider } from './context/ProductProvider';

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={query}>
    <React.StrictMode>
      <ProductProvider>
        <App />
      </ProductProvider>
    </React.StrictMode>
  </QueryClientProvider >
);


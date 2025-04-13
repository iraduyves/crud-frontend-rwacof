import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductProvider } from './context/ProductProvider';
import { AnalyticsProvider } from './context/AnalyticsProvider';

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={query}>
    <React.StrictMode>
      <ProductProvider>
        <AnalyticsProvider>
          <App />
        </AnalyticsProvider>
      </ProductProvider>
    </React.StrictMode>
  </QueryClientProvider >
);


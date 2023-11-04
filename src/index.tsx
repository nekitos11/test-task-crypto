import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CurrentCoinProvider } from './context/CurrentCoin/CurrentCoinProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrentCoinProvider>
        <App />
      </CurrentCoinProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

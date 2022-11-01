import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routes';
import ERoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <ERoutes/>
    </QueryClientProvider>
    </>
  );
}

export default App;

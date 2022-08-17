import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import ReactDOM from 'react-dom/client'
import { App } from './App'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

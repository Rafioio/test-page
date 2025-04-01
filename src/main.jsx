import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from "./routes.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from "./styles/GlobalStyles.js";

const queryClient = new QueryClient({defaultOptions:{queries: {retry: false}},
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Routes />
    <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>
);

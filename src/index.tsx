import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { store } from 'config/store';
import { queryClient } from 'services/queryClient';
import { theme } from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

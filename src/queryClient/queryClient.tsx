
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const CoreProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={defaultQueryClient}>
    {children}
  </QueryClientProvider>
);

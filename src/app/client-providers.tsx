"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Modal from "@/components/ui/modal";

function ClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Modal />
      {children}
    </QueryClientProvider>
  );
}

export default ClientProvider;

import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    // Prevent refetch on window focus in development
    refetchOnWindowFocus: import.meta.env.PROD,
    // Retry failed requests
    retry: (failureCount, error: any) => {
      // Don't retry on 404 or 401
      if (error?.response?.status === 404 || error?.response?.status === 401) {
        return false;
      }
      return failureCount < 2;
    },
    // Cache time: 5 minutes
    gcTime: 5 * 60 * 1000,
    // Stale time: 30 seconds (data is fresh for 30s)
    staleTime: 30 * 1000,
  },
  mutations: {
    // Retry mutations once on network errors
    retry: (failureCount, error: any) => {
      if (error?.code === "NETWORK_ERROR") {
        return failureCount < 1;
      }
      return false;
    },
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

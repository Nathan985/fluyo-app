import React from 'react';
import { Router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ProjectContextProvider } from './@shared/context/ProjectContext/ProjectContext';
import { AuthContextProvider } from './@shared/context/AuthContext/AuthContext';

const ONE_HOUR_IN_MS = 1000 * 60 * 60;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: ONE_HOUR_IN_MS,
		},
	},
});

export const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>

			<Toaster position='top-center' />
			<ProjectContextProvider>

			<Router />
			</ProjectContextProvider>
			</AuthContextProvider>
		</QueryClientProvider>
	);
};

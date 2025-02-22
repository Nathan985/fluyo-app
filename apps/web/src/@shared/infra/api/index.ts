/* eslint-disable @typescript-eslint/ban-ts-comment */
import { env, localStorageKeys } from 'src/@shared/config';
import axios, { AxiosError } from 'axios';

import { HttpClient } from '../http/client/HttpClient';
import LocalStorageAdapter from '../cache/LocalStorageAdapter';

export const customAxios = axios.create({
	baseURL: `${env.API_HOST}`,
	headers: {
		'Content-Type': 'application/json',
	},
});

customAxios.interceptors.request.use(async (config) => {
	const response = LocalStorageAdapter.get<{ token: string }>(
		localStorageKeys.TOKEN
	);

	config.headers &&
		(() => {
			config.headers.Authorization = `Bearer ${response?.token}`;
		})();

	return config;
});

// Add a request interceptor
customAxios.interceptors.response.use(
	async (config) => {
		return config;
	},
	async (error: AxiosError) => {
		const { request } = error;

		const status = request.status;

		if (status === 401 || status === 403) {
			localStorage.clear();
			window.location.reload();
		}

		return Promise.reject(error);
	}
);

export default () => new HttpClient(customAxios);

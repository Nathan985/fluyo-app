import { FastifyInstance } from 'fastify';

import { getFacades } from '@/usecases';

import { getAuthRoutes } from './auth';

export function buildRoutes(app: FastifyInstance) {
	const facadesApplication = getFacades();
	app.register(
		(application) => getAuthRoutes(application, facadesApplication.auth),
		{
			prefix: '/auth',
		}
	);
}

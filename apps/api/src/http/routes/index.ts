import { FastifyInstance } from 'fastify';

import { getFacades } from '@/usecases';

import { getAuthRoutes } from './auth';
import { auth } from '../middlewares/auth';
import { getProjectsRoute } from './projects';

export function buildRoutes(app: FastifyInstance) {
	const facadesApplication = getFacades();
	app.register(auth);
	app.register(
		(application) => getAuthRoutes(application, facadesApplication.auth),
		{
			prefix: '/auth',
		}
	);
	app.register((application) =>
		getProjectsRoute(application, facadesApplication.project)
	);
}

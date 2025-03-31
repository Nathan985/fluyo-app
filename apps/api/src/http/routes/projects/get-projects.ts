import { ProjectController } from '@/controller/project/project.controller';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { GetProjects } from './@dto';

export async function getProjects(
	app: FastifyInstance,
	controller: ProjectController
) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/project',
		{
			schema: {
				tags: ['project'],
				summary: 'Create a new project',
				security: [{ bearerAuth: [] }],
				response: {
					200: GetProjects.output,
				},
			},
		},
		controller.getProjects
	);
}

import { ProjectController } from '@/controller/project/project.controller';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { CreateProject } from './@dto';

export async function createProject(
	app: FastifyInstance,
	controller: ProjectController
) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/project',
		{
			schema: {
				tags: ['project'],
				summary: 'Create a new project',
				security: [{ bearerAuth: [] }],
				body: CreateProject.input,
				response: {
					201: CreateProject.output,
				},
			},
		},
		controller.createProject
	);
}

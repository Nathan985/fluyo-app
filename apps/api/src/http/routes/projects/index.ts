import { ProjectController } from '@/controller/project/project.controller';
import { ProjectFacade } from '@/usecases/projects/@facade/projects.facade';
import { FastifyInstance } from 'fastify';
import { createProject } from './create-project';
import { getProjects } from './get-projects';

export function getProjectsRoute(app: FastifyInstance, props: ProjectFacade) {
	const controller = new ProjectController({ facade: props });

	createProject(app, controller);
	getProjects(app, controller);
}

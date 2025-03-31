import { ProjectFacade } from '@/usecases/projects/@facade/projects.facade';
import { ControllerBase } from '../@base/controller-base';
import { IprojectController } from '../@dto/project.controller';
import { IProjectsFacade } from '@/usecases/projects/@facade/projects.facade.interface';
import { FastifyReply, FastifyRequest } from 'fastify';

export class ProjectController extends ControllerBase<ProjectFacade> {
	constructor(params: IprojectController.IConstructor) {
		super({ facade: params.facade });
		this.createProject = this.createProject.bind(this);
		this.getProjects = this.getProjects.bind(this);
	}

	async createProject(request: FastifyRequest, reply: FastifyReply) {
		const params = this.getParams<IProjectsFacade.CreateProject.Input>(request);
		const result = await this._facade.createProject(params, {
			reply,
			request,
		});

		return reply.status(201).send(result);
	}

	async getProjects(request: FastifyRequest, reply: FastifyReply) {
		const params = this.getParams<IProjectsFacade.GetProjects.Input>(request);
		const response = await this._facade.getProjects(params, {
			reply,
			request,
		});

		reply.status(200).send(response);
	}
}

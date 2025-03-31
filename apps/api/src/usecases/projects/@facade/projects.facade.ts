import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import { CreateProjectUsecase } from '../create-project.usecase';
import { GetProjectsUseCase } from '../get-projects.usecase';
import { IProjectsFacade } from './projects.facade.interface';

export class ProjectFacade implements IProjectsFacade {
	private _createProject: CreateProjectUsecase;
	private _getProject: GetProjectsUseCase;

	constructor(params: IProjectsFacade.IConstructor) {
		this._createProject = params.createProject;
		this._getProject = params.getProjects;
	}

	async createProject(
		params: IProjectsFacade.CreateProject.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IProjectsFacade.CreateProject.Output> {
		return await this._createProject.execute(params, controller);
	}

	async getProjects(
		params: IProjectsFacade.GetProjects.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IProjectsFacade.GetProjects.Output> {
		return await this._getProject.execute(params, controller);
	}
}

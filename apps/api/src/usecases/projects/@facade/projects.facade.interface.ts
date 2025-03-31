import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import { ICreateProjectUsecase, IGetProjectUsecase } from '../@dto';
import { CreateProjectUsecase } from '../create-project.usecase';
import { GetProjectsUseCase } from '../get-projects.usecase';

export interface IProjectsFacade {
	createProject: (
		params: IProjectsFacade.CreateProject.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IProjectsFacade.CreateProject.Output>;
	getProjects: (
		params: IProjectsFacade.GetProjects.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IProjectsFacade.GetProjects.Output>;
}

export namespace IProjectsFacade {
	export type IConstructor = {
		createProject: CreateProjectUsecase;
		getProjects: GetProjectsUseCase;
	};

	export namespace CreateProject {
		export type Input = ICreateProjectUsecase.Input;
		export type Output = ICreateProjectUsecase.Output;
	}

	export namespace GetProjects {
		export type Input = IGetProjectUsecase.Input;
		export type Output = IGetProjectUsecase.Output;
	}
}

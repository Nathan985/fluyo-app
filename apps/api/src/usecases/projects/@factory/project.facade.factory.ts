import { ProjectFacade } from '../@facade/projects.facade';
import { CreateProjectUsecase } from '../create-project.usecase';
import { GetProjectsUseCase } from '../get-projects.usecase';

export class ProjectFacadeFactory {
	static create(): ProjectFacade {
		const createProjectUsecase = new CreateProjectUsecase();
		const getProjectsUseCase = new GetProjectsUseCase();

		const facade = new ProjectFacade({
			createProject: createProjectUsecase,
			getProjects: getProjectsUseCase,
		});

		return facade;
	}
}

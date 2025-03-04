import { IServiceHookHelperResponse } from '../@shared/ServiceHookHelper';
import { IProjectEntity } from '../entities/project.entity';

export interface IProjectService {
	createProject: (
		params: IProjectService.CreateProject.Params
	) => Promise<IServiceHookHelperResponse<IProjectService.CreateProject.Reply>>;
	getProjects: () => Promise<
		IServiceHookHelperResponse<IProjectService.GetProjects.Reply>
	>;
}

export namespace IProjectService {
	export namespace CreateProject {
		export type Params = {
			name: string;
			description?: string;
		};

		export type Reply = void;
	}

	export namespace GetProjects {
		export type Reply = Array<IProjectEntity>;
	}
}

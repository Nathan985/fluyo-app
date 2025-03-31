import { IServiceHookHelperResponse } from '../interfaces/@shared/ServiceHookHelper';
import { IProjectService } from '../interfaces/services/ProjectService';
import { BaseService } from './BaseService';

class ProjectService extends BaseService implements IProjectService {
	constructor() {
		super('project');
		this.createProject = this.createProject.bind(this);
		this.getProjects = this.getProjects.bind(this);
	}
	async createProject(
		params: IProjectService.CreateProject.Params
	): Promise<IServiceHookHelperResponse<IProjectService.CreateProject.Reply>> {
		const { serviceHookHelper } = this._serviceHelper;

		const reponse = await serviceHookHelper(
			'POST'
		)<IProjectService.CreateProject.Reply>({
			url: this._context,
			data: params,
		});

		return reponse;
	}
	async getProjects(): Promise<
		IServiceHookHelperResponse<IProjectService.GetProjects.Reply>
	> {
		const { serviceHookHelper } = this._serviceHelper;

		const response = await serviceHookHelper(
			'GET'
		)<IProjectService.GetProjects.Reply>({
			url: this._context,
			data: {},
		});

		return response;
	}
}

export default new ProjectService();

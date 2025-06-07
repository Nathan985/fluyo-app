import { IServiceHookHelperResponse } from '../interfaces/@shared/ServiceHookHelper';
import { IInviteService } from '../interfaces/services/InviteService';
import { BaseService } from './BaseService';

class InviteService extends BaseService implements IInviteService {
	constructor() {
		super('invite');
		this.createInvite = this.createInvite.bind(this);
		this.getInvites = this.getInvites.bind(this);
		this.manageInvite = this.manageInvite.bind(this);
	}

	async createInvite({
		slug,
		...params
	}: IInviteService.CreateInvite.Params): Promise<
		IServiceHookHelperResponse<IInviteService.CreateInvite.Reply>
	> {
		const { serviceHookHelper } = this._serviceHelper;

		const response = await serviceHookHelper(
			'POST'
		)<IInviteService.CreateInvite.Reply>({
			url: `${this._context}/${slug}`,
			data: params,
		});

		return response;
	}

	async getInvites(): Promise<
		IServiceHookHelperResponse<IInviteService.GetInvites.Reply>
	> {
		const { serviceHookHelper } = this._serviceHelper;

		const response = await serviceHookHelper(
			'GET'
		)<IInviteService.GetInvites.Reply>({
			url: `${this._context}`,
			data: {},
		});

		return response;
	}

	async manageInvite(
		params: IInviteService.ManageInvite.Params
	): Promise<IServiceHookHelperResponse<IInviteService.ManageInvite.Reply>> {
		const { serviceHookHelper } = this._serviceHelper;

		const response = await serviceHookHelper(
			'POST'
		)<IInviteService.ManageInvite.Reply>({
			url: `${this._context}`,
			data: params,
		});

		return response;
	}
}

export default new InviteService();

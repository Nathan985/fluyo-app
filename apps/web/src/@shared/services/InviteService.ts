import { IServiceHookHelperResponse } from '../interfaces/@shared/ServiceHookHelper';
import { IInviteService } from '../interfaces/services/InviteService';
import { BaseService } from './BaseService';

class InviteService extends BaseService implements IInviteService {
	constructor() {
		super('invite');
		this.createInvite = this.createInvite.bind(this);
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
}

export default new InviteService();

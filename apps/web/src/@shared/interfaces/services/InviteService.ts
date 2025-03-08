import { IServiceHookHelperResponse } from '../@shared/ServiceHookHelper';

export interface IInviteService {
	createInvite: (
		params: IInviteService.CreateInvite.Params
	) => Promise<IServiceHookHelperResponse<IInviteService.CreateInvite.Reply>>;
}

export namespace IInviteService {
	export namespace CreateInvite {
		export type Params = {
			email: string;
			role: string;
			slug: string;
		};

		export type Reply = { inviteId: string };
	}
}

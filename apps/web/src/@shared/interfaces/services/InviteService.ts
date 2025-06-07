import { IServiceHookHelperResponse } from '../@shared/ServiceHookHelper';
import { IInviteEntity } from '../entities/invite.entity';

export interface IInviteService {
	createInvite: (
		params: IInviteService.CreateInvite.Params
	) => Promise<IServiceHookHelperResponse<IInviteService.CreateInvite.Reply>>;
	getInvites: () => Promise<
		IServiceHookHelperResponse<IInviteService.GetInvites.Reply>
	>;
	manageInvite: (
		params: IInviteService.ManageInvite.Params
	) => Promise<IServiceHookHelperResponse<IInviteService.ManageInvite.Reply>>;
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

	export namespace GetInvites {
		export type Reply = Array<IInviteEntity>;
	}

	export namespace ManageInvite {
		export type Params = {
			status: 'accept' | 'decline';
			invite_uuid: string;
		};

		export type Reply = void;
	}
}

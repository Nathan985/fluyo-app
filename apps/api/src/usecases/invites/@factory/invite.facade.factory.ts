import { InviteFacade } from '../@facade/invite.facade';
import { CreateInviteUsecase } from '../create-invite';
import { GetInvitesUsecase } from '../get-invites';
import { ManageInviteUsecase } from '../manage-invite';

export class InviteFacadeFactory {
	static create(): InviteFacade {
		const createInviteUsecase = new CreateInviteUsecase();
		const getInvitesUsecase = new GetInvitesUsecase();
		const manageInviteUsecase = new ManageInviteUsecase();

		const facade = new InviteFacade({
			createInvite: createInviteUsecase,
			getInvites: getInvitesUsecase,
			manageInvite: manageInviteUsecase,
		});

		return facade;
	}
}

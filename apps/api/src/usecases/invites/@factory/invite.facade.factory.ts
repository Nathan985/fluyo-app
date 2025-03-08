import { InviteFacade } from '../@facade/invite.facade';
import { CreateInviteUsecase } from '../create-invite';

export class InviteFacadeFactory {
	static create(): InviteFacade {
		const createInviteUsecase = new CreateInviteUsecase();

		const facade = new InviteFacade({
			createInvite: createInviteUsecase,
		});

		return facade;
	}
}

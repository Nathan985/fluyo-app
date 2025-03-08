import { InviteFacade } from '@/usecases/invites/@facade/invite.facade';

export namespace IInviteController {
	export type IConstructor = {
		facade: InviteFacade;
	};
}

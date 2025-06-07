import { InviteController } from '@/controller/invite/invite.controller';
import { InviteFacade } from '@/usecases/invites/@facade/invite.facade';
import { FastifyInstance } from 'fastify';
import { createInvite } from './create-invite';
import { getInvites } from './get-invites';
import { manageInvite } from './manage-invite';

export function getInviteRoute(app: FastifyInstance, props: InviteFacade) {
	const controller = new InviteController({ facade: props });

	createInvite(app, controller);
	getInvites(app, controller);
	manageInvite(app, controller);
}

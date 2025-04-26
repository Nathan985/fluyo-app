import { InviteFacade } from '@/usecases/invites/@facade/invite.facade';
import { ControllerBase } from '../@base/controller-base';
import { IInviteController } from '../@dto/invite.controller';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IInviteFacade } from '@/usecases/invites/@facade/invite.facade.interface';

export class InviteController extends ControllerBase<InviteFacade> {
	constructor(params: IInviteController.IConstructor) {
		super({ facade: params.facade });
		this.createInvite = this.createInvite.bind(this);
	}

	async createInvite(request: FastifyRequest, reply: FastifyReply) {
		const body = this.getParams<IInviteFacade.CreateInvite.Input>(request);
		const params = request.params as Pick<
			IInviteFacade.CreateInvite.Input,
			'slug'
		>;

		const result = await this._facade.createInvite(
			{ ...body, ...params },
			{
				reply,
				request,
			}
		);

		reply.status(201).send(result);
	}
}

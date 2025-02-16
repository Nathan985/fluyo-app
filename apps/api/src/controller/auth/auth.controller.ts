import { FastifyReply, FastifyRequest } from 'fastify';

import { AuthFacade } from '@/usecases/auth/@facade/auth.facade';
import { IAuthFacade } from '@/usecases/auth/@facade/auth.facade.interface';

import { IAuthController } from '../@base/auth.controller';
import { ControllerBase } from '../@base/controller-base';

export class AuthController extends ControllerBase<AuthFacade> {
	constructor(params: IAuthController.IConstructor) {
		super({ facade: params.facade });
		this.authenticateWithPassword = this.authenticateWithPassword.bind(this);
	}

	async authenticateWithPassword(request: FastifyRequest, reply: FastifyReply) {
		const params =
			this.getParams<IAuthFacade.AuthenticateWithPassword.Input>(request);
		const result = await this._facade.authenticateWithPassword(params, {
			request,
			reply,
		});

		reply.status(201).send(result);
	}
}

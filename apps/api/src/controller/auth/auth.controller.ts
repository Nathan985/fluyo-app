import { FastifyReply, FastifyRequest } from 'fastify';

import { AuthFacade } from '@/usecases/auth/@facade/auth.facade';
import { IAuthFacade } from '@/usecases/auth/@facade/auth.facade.interface';

import { ControllerBase } from '../@base/controller-base';
import { IAuthController } from '../@dto/auth.controller';

export class AuthController extends ControllerBase<AuthFacade> {
	constructor(params: IAuthController.IConstructor) {
		super({ facade: params.facade });
		this.authenticateWithPassword = this.authenticateWithPassword.bind(this);
		this.createAccount = this.createAccount.bind(this);
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

	async createAccount(request: FastifyRequest, reply: FastifyReply) {
		const params = this.getParams<IAuthFacade.CreateAccount.Input>(request);
		await this._facade.createAccount(params);

		reply.status(201).send({
			message: 'Account created sucessfully',
		});
	}
}

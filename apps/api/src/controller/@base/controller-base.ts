import { FastifyRequest } from 'fastify';

import { IControllerBase } from '../@types';

export class ControllerBase<TFacade> implements IControllerBase {
	public _facade: TFacade;

	constructor(params: IControllerBase.IConstructor<TFacade>) {
		this._facade = params.facade;
	}

	public getParams<Input>(request: FastifyRequest): Input {
		if (request.method === 'GET') {
			return request.params as Input;
		}

		return request.body as Input;
	}
}

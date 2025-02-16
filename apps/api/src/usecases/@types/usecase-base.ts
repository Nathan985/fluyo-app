import { FastifyReply, FastifyRequest } from 'fastify';

export interface IUseCaseBase<Input, Output> {
	execute(
		params: IUseCaseBase.Execute.Params<Input>,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IUseCaseBase.Execute.Result<Output>>;
}

export namespace IUseCaseBase {
	export namespace Execute {
		export type Params<Input> = Input;
		export type RequestController = {
			request: FastifyRequest;
			reply: FastifyReply;
		};
		export type Result<Output> = Output;
	}
}

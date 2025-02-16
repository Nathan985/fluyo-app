import { IUseCaseBase } from '@/usecases/@types/usecase-base';

import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';
import { IAuthFacade } from './auth.facade.interface';

export class AuthFacade implements IAuthFacade {
	private _authenticateWithPassword: AuthenticateWithPasswordUseCase;

	constructor(params: IAuthFacade.IConstructor) {
		this._authenticateWithPassword = params.authenticateWithPassword;
	}

	async authenticateWithPassword(
		params: IAuthFacade.AuthenticateWithPassword.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IAuthFacade.AuthenticateWithPassword.Output> {
		return await this._authenticateWithPassword.execute(params, controller);
	}
}

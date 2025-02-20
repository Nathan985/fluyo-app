import { IUseCaseBase } from '@/usecases/@types/usecase-base';

import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';
import { CreateAccountUsecase } from '../create-account.usecase';
import { IAuthFacade } from './auth.facade.interface';

export class AuthFacade implements IAuthFacade {
	private _authenticateWithPassword: AuthenticateWithPasswordUseCase;
	private _createAccount: CreateAccountUsecase;

	constructor(params: IAuthFacade.IConstructor) {
		this._authenticateWithPassword = params.authenticateWithPassword;
		this._createAccount = params.createAccount;
	}

	async authenticateWithPassword(
		params: IAuthFacade.AuthenticateWithPassword.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IAuthFacade.AuthenticateWithPassword.Output> {
		return await this._authenticateWithPassword.execute(params, controller);
	}

	async createAccount(
		params: IAuthFacade.CreateAccount.Input
	): Promise<IAuthFacade.CreateAccount.Output> {
		return await this._createAccount.execute(params);
	}
}

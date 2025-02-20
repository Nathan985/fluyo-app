import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import {
	IAuthenticateWithPasswordUseCase,
	ICreateAccountUseCase,
} from '@/usecases/auth/@dto';

import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';
import { CreateAccountUsecase } from '../create-account.usecase';

export interface IAuthFacade {
	authenticateWithPassword: (
		params: IAuthFacade.AuthenticateWithPassword.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IAuthFacade.AuthenticateWithPassword.Output>;
	createAccount: (
		params: IAuthFacade.CreateAccount.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IAuthFacade.CreateAccount.Output>;
}

export namespace IAuthFacade {
	export type IConstructor = {
		authenticateWithPassword: AuthenticateWithPasswordUseCase;
		createAccount: CreateAccountUsecase;
	};

	export namespace CreateAccount {
		export type Input = ICreateAccountUseCase.Input;
		export type Output = ICreateAccountUseCase.Output;
	}

	export namespace AuthenticateWithPassword {
		export type Input = IAuthenticateWithPasswordUseCase.Input;
		export type Output = IAuthenticateWithPasswordUseCase.Output;
	}
}

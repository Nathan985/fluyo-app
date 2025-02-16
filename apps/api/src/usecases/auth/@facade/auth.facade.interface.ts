import { IAuthenticateWithPasswordUseCase } from '@/usecases/@dto';
import { IUseCaseBase } from '@/usecases/@types/usecase-base';

import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';

export interface IAuthFacade {
	authenticateWithPassword: (
		params: IAuthFacade.AuthenticateWithPassword.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IAuthFacade.AuthenticateWithPassword.Output>;
}

export namespace IAuthFacade {
	export type IConstructor = {
		authenticateWithPassword: AuthenticateWithPasswordUseCase;
	};

	export namespace AuthenticateWithPassword {
		export type Input = IAuthenticateWithPasswordUseCase.Input;
		export type Output = IAuthenticateWithPasswordUseCase.Output;
	}
}

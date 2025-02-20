import { AuthFacade } from '../@facade/auth.facade';
import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';
import { CreateAccountUsecase } from '../create-account.usecase';

export class AuthFacadeFactory {
	static create(): AuthFacade {
		const authenticateWithPasswordUseCase =
			new AuthenticateWithPasswordUseCase();
		const createAccountUsecase = new CreateAccountUsecase();

		const facade = new AuthFacade({
			authenticateWithPassword: authenticateWithPasswordUseCase,
			createAccount: createAccountUsecase,
		});

		return facade;
	}
}

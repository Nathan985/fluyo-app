import { AuthFacade } from '../@facade/auth.facade';
import { AuthenticateWithPasswordUseCase } from '../authenticate-with-password.usecase';

export class AuthFacadeFactory {
	static create(): AuthFacade {
		const authenticateWithPasswordUseCase =
			new AuthenticateWithPasswordUseCase();

		const facade = new AuthFacade({
			authenticateWithPassword: authenticateWithPasswordUseCase,
		});

		return facade;
	}
}

import { AuthFacade } from '@/usecases/auth/@facade/auth.facade';

export namespace IAuthController {
	export type IConstructor = {
		facade: AuthFacade;
	};
}

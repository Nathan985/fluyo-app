import { AuthFacade } from './auth/@facade/auth.facade';
import { AuthFacadeFactory } from './auth/@factory/auth.facade.factory';

export type IGetFacades = {
	auth: AuthFacade;
};

export function getFacades(): IGetFacades {
	const auth = AuthFacadeFactory.create();

	return {
		auth,
	};
}

import { IServiceHookHelperResponse } from '../@shared/ServiceHookHelper';

export interface IAuthService {
	authenticate: (
		params: IAuthService.Authentication.Params
	) => Promise<IServiceHookHelperResponse<IAuthService.Authentication.Reply>>;
	createAnAccount: (
		params: IAuthService.CreateAnAccount.Params
	) => Promise<IServiceHookHelperResponse<IAuthService.CreateAnAccount.Reply>>;
}

export namespace IAuthService {
	export namespace Authentication {
		export type Params = {
			email: string;
			password: string;
		};

		export type Reply = {
			token: string;
		};
	}

	export namespace CreateAnAccount {
		export type Params = {
			name: string;
			email: string;
			password: string;
		};

		export type Reply = {
			message: string;
		};
	}
}

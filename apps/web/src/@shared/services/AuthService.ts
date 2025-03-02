import { localStorageKeys } from '../config';
import { ServiceAPIHelper } from '../hooks/ServiceHookHelper';
import LocalStorageAdapter from '../infra/cache/LocalStorageAdapter';
import { IServiceHookHelperResponse } from '../interfaces/@shared/ServiceHookHelper';
import { IAuthService } from '../interfaces/services/AuthService';
import { BaseService } from './BaseService';

class AuthService extends BaseService implements IAuthService {
	constructor() {
		super('auth');
		this.authenticate = this.authenticate.bind(this);
		this.createAnAccount = this.createAnAccount.bind(this);
	}

	async authenticate(
		params: IAuthService.Authentication.Params
	): Promise<IServiceHookHelperResponse<IAuthService.Authentication.Reply>> {
		const { serviceHookHelper } = ServiceAPIHelper(this._httpProvider);

		const response = await serviceHookHelper(
			'POST'
		)<IAuthService.Authentication.Reply>({
			url: `${this._context}/sessions/password`,
			data: params,
		});

		const { token } = response.data;

		if (token) {
			LocalStorageAdapter.set(localStorageKeys.TOKEN, { token });
		}

		return response;
	}

	async createAnAccount(
		params: IAuthService.CreateAnAccount.Params
	): Promise<IServiceHookHelperResponse<IAuthService.CreateAnAccount.Reply>> {
		const { serviceHookHelper } = this._serviceHelper;

		const response = await serviceHookHelper(
			'POST'
		)<IAuthService.CreateAnAccount.Reply>({
			url: `${this._context}/users`,
			data: params,
		});

		return response;
	}
}

export default new AuthService();

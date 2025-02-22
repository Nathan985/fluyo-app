import { AxiosInstance } from 'axios';
import { IHttpClient } from '../interfaces/http/client/HttpClient';
import { IServiceHookHelper } from '../interfaces/@shared/ServiceHookHelper';
import api, { customAxios } from '../infra/api';
import { ServiceAPIHelper } from '../hooks/ServiceHookHelper';

export class BaseService {
	public _httpClient: IHttpClient;
	public _httpProvider: AxiosInstance;
	public _context: string;
	public _serviceHelper: IServiceHookHelper;

	constructor(context: string) {
		this._httpClient = api();
		this._context = context;
		this._httpProvider = customAxios;
		this._serviceHelper = ServiceAPIHelper(this._httpProvider);
		console.log({ this: this._context });
	}
}

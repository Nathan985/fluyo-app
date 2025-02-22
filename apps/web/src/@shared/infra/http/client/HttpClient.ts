import {
	IHttpClient,
	HttpRequest,
} from 'src/@shared/interfaces/http/client/HttpClient';
import axios, { Axios, AxiosResponse } from 'axios';

export class HttpClient implements IHttpClient {
	private _client: Axios;

	constructor(client?: Axios) {
		this._client = client || axios;
	}

	async request(data: HttpRequest): Promise<AxiosResponse<any, any>> {
		const containParams = data.method === 'get';
		const body = containParams ? { params: data.body } : { data: data.body };
		return await this._client.request({
			url: data.url,
			method: data.method,
			...body,
			headers: data.headers,
			responseType: data.responseType,
		});
	}
}

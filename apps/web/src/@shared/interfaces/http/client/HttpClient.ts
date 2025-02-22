import { AxiosResponse } from "axios"

export interface IHttpClient {
	request: <Response = any, Error = any>(
		data: HttpRequest
	) => Promise<AxiosResponse<Response, Error>>
}

export type HttpMethod = "post" | "get" | "put" | "delete" | "patch"

export enum HttpStatusCode {
	ok = 200,
	noContent = 204,
	wrongValues = 422,
	methodNotAllowed = 405,
	badRequest = 400,
	unauthorized = 401,
	forbidden = 403,
	notFound = 404,
	serverError = 500,
}

export type HttpResponse<T = any> = {
	statusCode: HttpStatusCode
	body: T
}

export type HttpRequest = {
	url: string
	method: HttpMethod
	body?: any
	headers?: any
	responseType?:
		| "arraybuffer"
		| "blob"
		| "document"
		| "json"
		| "text"
		| "stream"
}

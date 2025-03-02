type BadRequestErrorObjectConstructor = {
	path?: [string];
	message?: string;
};

type BadRequestErrorMessageConstructor = string;

type BadRequestErrorConstructor =
	| BadRequestErrorMessageConstructor
	| BadRequestErrorObjectConstructor;

export class BadRequestError extends Error {
	public path?: [string];

	constructor(message: BadRequestErrorMessageConstructor);
	constructor(props: BadRequestErrorObjectConstructor);
	constructor(params: BadRequestErrorConstructor) {
		if (typeof params === 'string') {
			super(params);
			return;
		}
		super(params.message);
		Object.assign(this, params);
	}
}

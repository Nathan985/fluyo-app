export interface IControllerBase {}

export namespace IControllerBase {
	export type IConstructor<T> = {
		facade: T;
	};
}

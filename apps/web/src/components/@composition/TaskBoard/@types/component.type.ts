import { BaseItemsType } from './base.component.type';

export type IComponentType<T extends BaseItemsType> = {
	data: Record<string, Array<T>>;
};

export type IRenderColmunType<T extends BaseItemsType> = {
	columnId: string;
	data: Array<T>;
};

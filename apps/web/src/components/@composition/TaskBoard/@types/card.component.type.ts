import { BaseItemsType } from './base.component.type';

export type ICardType<T extends BaseItemsType> = {
	data: T;
	isOverlay?: boolean;
};

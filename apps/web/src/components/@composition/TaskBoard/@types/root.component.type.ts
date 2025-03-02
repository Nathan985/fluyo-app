import { ReactNode } from 'react';
import { BaseItemsType } from './base.component.type';

export type IRootType<T extends BaseItemsType> = {
	children?: ReactNode;
	data: Record<string, Array<T>>;
};

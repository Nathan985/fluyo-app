import { ReactNode } from 'react';
import { BaseItemsType } from './base.component.type';

export type IHeaderColumnType<T extends BaseItemsType> = Pick<
	IColumnType<T>,
	'title'
>;

export type IColumnType<T extends BaseItemsType> = {
	title: string;
	children?: ReactNode;
	data: Array<T>;
};

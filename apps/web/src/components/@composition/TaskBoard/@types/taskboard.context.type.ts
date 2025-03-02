import { ReactNode } from 'react';
import { BaseItemsType } from './base.component.type';
import {
	DragEndEvent,
	DragOverEvent,
	DragStartEvent,
	UniqueIdentifier,
} from '@dnd-kit/core';

export type ITaskBoardContextType<T extends BaseItemsType = any> = {
	getColumnData: (columnId: string) => T[];
	columns: Array<string>;
	onDragEnd: (event: DragEndEvent) => void;
	columnsData: Record<string, Array<T>>;
	activeTask: T | undefined;
	onDragStart: (event: DragStartEvent) => void;
	onDragOver: (event: DragOverEvent) => void;
};

export type ITaskBoardContextProviderType<T extends BaseItemsType> = {
	children?: ReactNode;
	data: Record<string, Array<T>>;
};

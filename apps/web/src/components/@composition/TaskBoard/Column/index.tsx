import { HeaderColumn } from './header';
import { IColumnType } from '../@types/column.component.type';
import { BaseItemsType } from '../@types/base.component.type';
import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';

export const Column = <T extends BaseItemsType>(props: IColumnType<T>) => {
	const { children, data, title } = props;

	const { setNodeRef } = useDroppable({
		id: title,
	});

	return (
		<div className='flex h-full max-h-full w-full max-w-full flex-col rounded-md bg-gray-900 px-2 py-4'>
			<HeaderColumn {...props} />
			<div
				ref={setNodeRef}
				className='app-scrollbar flex h-full max-h-full w-full flex-col gap-2 overflow-y-auto rounded-md px-1 py-2'
			>
				<SortableContext
					id={title}
					items={data}
					strategy={verticalListSortingStrategy}
				>
					{children}
				</SortableContext>
			</div>
		</div>
	);
};

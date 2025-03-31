import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import React, { useContext, useState } from 'react';

import { TableContext } from './context/TableContext';
import {
	baseEntity,
	ColumnProps,
	ITableContext,
	TableHeaderProps,
} from './interface/ITableProps';

const TableHeader = <T extends baseEntity>({
	rows,
	enableAction = false,
	isSelectableLines = false,
	actions,
	hideActionButton,
	onReorder,
	columns,
	reorderColumns,
}: TableHeaderProps<T>) => {
	const { rowsSelect, selectAll, unSelectAll } =
		useContext<ITableContext<T>>(TableContext);

	return (
		<Reorder.Group
			as='thead'
			className='sticky top-[-4px] z-30 h-[3.1rem] bg-accent ring-1 ring-border backdrop-blur-lg dark:bg-gray-900'
			axis='x'
			onReorder={(data) => {
				onReorder?.(data);
			}}
			values={columns}
		>
			<tr className='h-[3.1rem] px-4 py-3.5'>
				{isSelectableLines && (
					<th className='w-1.5'>
						<input
							type='checkbox'
							onChange={(event) => {
								event.currentTarget.checked ? selectAll(rows) : unSelectAll();
							}}
							className='mx-4 h-4 w-4 cursor-pointer rounded border-gray-500 bg-background bg-gray-900 text-primary !outline-none focus:outline-none focus:ring-indigo-900 active:border-0 active:outline-none active:ring-0'
							checked={rowsSelect.length === rows.length}
						/>
					</th>
				)}

				{actions && actions.length !== 0 && !hideActionButton && (
					<th className='w-fit whitespace-nowrap text-start text-sm font-semibold text-muted-foreground/80 sm:pl-6'>
						#
					</th>
				)}
				{columns.map((column) => (
					<TableHeaderColumn
						reorderColumns={reorderColumns}
						column={column}
						key={column.label}
					/>
				))}

				{enableAction && (
					<th
						scope='col'
						className='text-left text-sm font-semibold text-muted-foreground sm:pl-6'
					></th>
				)}
			</tr>
		</Reorder.Group>
	);
};

const TableHeaderColumn = <T extends baseEntity>({
	column,
	reorderColumns,
}: {
	column: ColumnProps<T>;
	reorderColumns: boolean;
}) => {
	const [isDragging, setDragging] = useState(false);
	const controls = useDragControls();
	const x = useMotionValue(0);

	const onTop = { zIndex: 20 };
	const flat = {
		zIndex: 0,
		transition: { delay: 0.3 },
	};

	return (
		<Reorder.Item
			value={column}
			dragListener={false}
			dragControls={controls}
			animate={isDragging ? onTop : flat}
			onDragStart={() => setDragging(true)}
			onDragEnd={() => setDragging(false)}
			hidden={column.hidden}
			className='w-fit whitespace-nowrap text-start text-sm font-semibold text-muted-foreground/80 sm:pl-6'
			as='th'
			style={{ x, userSelect: 'none' }}
		>
			<div className='relative flex w-full justify-between gap-2'>
				{column.renderHeader?.() ?? column.label ?? String(column.column)}
				{reorderColumns && (
					<React.Fragment>
						<div
							className='reorder-handle w-fit cursor-grab rounded-sm bg-background/40 p-[4px] shadow-md hover:bg-background/100 active:cursor-grabbing'
							onPointerDown={(e) => controls.start(e)}
						>
							<ChevronUpDownIcon className='h-3 w-3 rotate-90 fill-foreground' />
						</div>
						<div className='divider absolute -right-3 bottom-0 top-0 border-r border-border'></div>
					</React.Fragment>
				)}
			</div>
		</Reorder.Item>
	);
};

export default TableHeader;

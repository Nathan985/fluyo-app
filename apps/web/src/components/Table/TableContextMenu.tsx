import { cn } from 'src/@shared/utils';
import React, { useContext } from 'react';

import { ContextMenu } from '../@composition/ContextMenu';
import { Spinner } from '../Spinner';
import { TableContext } from './context/TableContext';
import {
	baseEntity,
	ITableAction,
	TableContextMenuProps,
} from './interface/ITableProps';

interface TableContextMenuItemProps<TData> {
	action: ITableAction<TData>;
	data: any[];
	rowsIndexes: number[];
	rowIndex: number;
}

function TableContextMenuItem<TData>({
	action,
	data,
	rowsIndexes,
	rowIndex,
}: TableContextMenuItemProps<TData>) {
	const [isPending, setIsPending] = React.useState<boolean>(false);

	if (
		(action.shouldHideOnMultiple && rowsIndexes.length > 1) ||
		(action.shouldHide && action.shouldHide(data, 'context'))
	) {
		return null;
	}

	if (action.element) return action.element;

	const Icon = action.icon;

	async function handleClick() {
		if (action.disabled) return;

		if (action.onAsyncClick) {
			setIsPending(true);

			return await action
				.onAsyncClick(data, rowIndex, action.key)
				.finally(() => {
					setIsPending(false);
				});
		}

		action.onClick?.(data, rowIndex, action.key);
	}

	if (action.subActions && action.subActions.length !== 0) {
		return (
			<ContextMenu.Sub>
				<ContextMenu.SubTrigger disabled={action.disabled}>
					<div className='flex items-center gap-x-3'>
						{Icon && <Icon className='h-4 w-4 text-primary' />}
						{action.label}
					</div>
				</ContextMenu.SubTrigger>
				<ContextMenu.SubContent
					className={cn(
						'app-scrollbar-nested max-h-[400px] w-fit overflow-y-auto',
						isPending &&
							'bg-primary/10 text-primary-foreground ring-1 ring-primary',
						action.disabled && !isPending && 'opacity-50'
					)}
				>
					{action.subActions.map((subAction: ITableAction<TData>) => (
						<TableContextMenuItem
							key={subAction.key}
							action={subAction}
							data={data}
							rowIndex={rowIndex}
							rowsIndexes={rowsIndexes}
						/>
					))}
				</ContextMenu.SubContent>
			</ContextMenu.Sub>
		);
	}

	return (
		<ContextMenu.Item
			key={action.key}
			onClick={handleClick}
			disabled={action.disabled}
			className={cn(
				isPending &&
					'bg-primary/10 text-primary-foreground ring-1 ring-primary',
				action.disabled && !isPending && 'opacity-50'
			)}
		>
			{Icon && <Icon className='h-4 w-4 text-primary' />}
			{action.label}
			{isPending && <Spinner className='ml-auto mr-0 h-3.5 w-3.5' />}
		</ContextMenu.Item>
	);
}

export function TableContextMenu<T extends baseEntity>({
	rows,
	actions = [],
}: TableContextMenuProps<T>) {
	const { rowsSelect } = useContext(TableContext);

	const rowsIndexes = rowsSelect as number[];
	const data = rowsIndexes.map((rowIndex) => rows[rowIndex]);

	if (actions.length === 0) {
		return null;
	}

	return (
		<ContextMenu.RContent
			className={cn(
				'app-scrollbar-nested overflow-y-auto lg:max-h-[300px] 2xl:max-h-[500px]'
			)}
		>
			{rowsSelect.length > 1 && (
				<div className='flex items-center justify-center rounded-md bg-secondary p-1 text-xs text-secondary-foreground'>
					{rowsSelect.length} selecionado(s)
				</div>
			)}

			{actions.map((action) => (
				<TableContextMenuItem
					key={action.key}
					action={action}
					data={data}
					rowsIndexes={rowsIndexes}
					rowIndex={0}
				/>
			))}
		</ContextMenu.RContent>
	);
}

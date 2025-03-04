import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useDisclosure } from 'src/@shared/hooks/useDisclosure';
import { cn } from 'src/@shared/utils';
import React, { useContext, useRef } from 'react';

import { DropdownMenu } from '../@composition/DropdownMenu';
import { Button } from '../Button';
import { Spinner } from '../Spinner';
import { TableContext } from './context/TableContext';
import { ITableAction, TableDropdownMenuProps } from './interface/ITableProps';

interface TableDropdownMenuItemProps<TData> {
	action: ITableAction<TData>;
	data: any[];
	rowsIndexes: number[];
	rowIndex: number;
	onRequestClose: () => void;
}

export const TableDropdownMenuItem = React.forwardRef<
	HTMLDivElement,
	TableDropdownMenuItemProps<any>
>(({ action, data, rowIndex, rowsIndexes, onRequestClose }, ref) => {
	const [isPending, setIsPending] = React.useState<boolean>(false);

	if (
		(action.shouldHideOnMultiple && rowsIndexes?.length > 1) ||
		(action.shouldHide && action.shouldHide(data, 'dropdown'))
	) {
		return null;
	}

	if (action.element) return <div ref={ref}>{action.element}</div>;

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
		onRequestClose();
	}

	if (action.subActions && action.subActions.length !== 0) {
		return (
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger ref={ref} disabled={action.disabled}>
					<div className='flex items-center gap-x-3'>
						{Icon && <Icon className='h-4 w-4 text-primary' />}
						{action.label}
					</div>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent
					ref={ref}
					className={cn(
						'app-scrollbar-nested max-h-[400px] w-fit overflow-y-auto',
						isPending &&
							'bg-primary/10 text-primary-foreground ring-1 ring-primary',
						action.disabled && !isPending && 'opacity-50'
					)}
				>
					{action.subActions.map((subAction) => (
						<TableDropdownMenuItem
							key={subAction.key}
							action={subAction}
							rowsIndexes={rowsIndexes}
							data={data}
							ref={ref}
							onRequestClose={onRequestClose}
							rowIndex={rowIndex}
						/>
					))}
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
		);
	}

	return (
		<DropdownMenu.Item
			ref={ref}
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
		</DropdownMenu.Item>
	);
});

TableDropdownMenuItem.displayName = 'TableDropdownMenuItem';

export function TableDropdownMenu<T>({
	row,
	actions = [],
	onOpenChange = () => {},
	rowIndex,
}: TableDropdownMenuProps<T>) {
	const dropdownDisclosure = useDisclosure();

	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownTriggerRef = useRef<HTMLDivElement>(null);
	const dropdownMenuItemRef = useRef<HTMLDivElement>(null);

	const { rows, rowsSelect, unSelectAll, selectRow } = useContext(TableContext);

	const rowsIndexes = rowsSelect as number[];
	const data = rowsIndexes.map((rowIndex) => rows[rowIndex]);

	const shouldUnselectAll = !rowsSelect.includes(rowIndex);

	if (actions.length === 0) {
		return null;
	}

	return (
		<DropdownMenu.Root
			open={dropdownDisclosure.isOpen}
			onOpenChange={(open) => {
				if (shouldUnselectAll) {
					unSelectAll();
					selectRow(rowIndex);
				}

				onOpenChange(open, row);
			}}
		>
			<DropdownMenu.Trigger asChild>
				<div
					ref={dropdownTriggerRef}
					className='flex w-full items-center justify-center'
				>
					<Button
						size='sm'
						onClick={dropdownDisclosure.onOpen}
						variant='ghost'
						className='!h-[1.7rem] !p-1 !px-2'
					>
						<p>Ações</p>
						<ChevronDownIcon className='h-3 w-3' />
					</Button>
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				onPointerDownOutside={dropdownDisclosure.onClose}
				ref={dropdownRef}
				className={cn(
					'app-scrollbar-nested overflow-y-auto lg:max-h-[300px] 2xl:max-h-[500px]'
				)}
			>
				{!shouldUnselectAll && rowsSelect.length > 1 && (
					<div className='flex items-center justify-center rounded-md bg-secondary p-1 text-xs text-secondary-foreground'>
						{rowsSelect.length} selecionado(s)
					</div>
				)}

				{actions.map((action) => (
					<TableDropdownMenuItem
						ref={dropdownMenuItemRef}
						key={action.key}
						action={action}
						onRequestClose={dropdownDisclosure.onClose}
						rowsIndexes={rowsIndexes}
						rowIndex={rowIndex}
						data={data}
					/>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}

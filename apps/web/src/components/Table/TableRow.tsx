import { cn } from 'src/@shared/utils';
import React, { useContext, useEffect } from 'react';
import { useKeyPress } from 'reactflow';

import { ContextMenu } from '../@composition/ContextMenu';
import { Spinner } from '../Spinner';
import { TableContext } from './context/TableContext';
import {
	baseEntity,
	ITableContext,
	TableRowProps,
} from './interface/ITableProps';
import { TableDropdownMenu } from './TableDropdownMenu';
import TableTriggerActions from 'src/view/pages/projects/components/TableTriggerActions';

const TableRow = <T extends baseEntity>({
	columns,
	rows,
	isSelectableLines,
	onTableRowClick,
	classNameRow,
	classNameBody,
	actions,
	onOpenChange = () => {},
	onScrollEnd,
	isLoading,
	hideActionButton,
}: TableRowProps<T>) => {
	const pressed = useKeyPress('Control');

	const { rowsSelect, selectRow, unSelectRow, unSelectAll } =
		useContext<ITableContext<T>>(TableContext);

	const parentRef = React.useRef(null);

	useEffect(() => {
		if (onScrollEnd) {
			const intersectionObserver = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting && !isLoading) {
					onScrollEnd();
				}
			});
			intersectionObserver.observe(
				document.querySelector('#last-row') as Element
			);
			return () => intersectionObserver.disconnect();
		}
	}, []);
	return (
		<ContextMenu.Trigger asChild>
			<tbody
				ref={parentRef}
				className={cn(
					'h-full w-full overflow-y-auto bg-background',
					classNameBody
				)}
			>
				{rows.map((row, index) => (
					<tr
						key={row.uuid}
						onClick={(event) => {
							if (pressed) {
								rowsSelect.includes(index)
									? unSelectRow(index)
									: selectRow(index);
							}

							/*
								O TableDropdownMenu, era renderizado dentro de uma TD, filha de uma TR.

								O onClick pra executar o onTableRowClick está com o evento atrelado a TR, dessa forma, o onTableRowClick
								considerava que o clique em qualquer item filho dessa TR, iria triggar o onClick. Isso impactava o envio
								de comandos que possuiam campos pra preencher no formulário (config e controle)

								Adicionado condicional pra verificar, e somente executar o onClick se o click acontecer na TR ou em uma TD,
								e não nos dropdowns.
							*/
							const clickedElement = event.target as HTMLElement;
							const closestTd = clickedElement.closest('td');

							const closestTdOrElementTagName =
								closestTd?.tagName ?? clickedElement.tagName;

							const closestTdOrElementId = closestTd?.id ?? clickedElement.id;

							const idsToAvoid = [
								'table-checkbox-input-td',
								'table-dropdown-menu-td',
							];

							if (
								onTableRowClick &&
								!idsToAvoid.includes(closestTdOrElementId)
							) {
								if (['TR', 'TD'].includes(closestTdOrElementTagName)) {
									onTableRowClick(row);
								}
							}
						}}
						onContextMenu={() => {
							if (!rowsSelect.includes(index)) {
								unSelectAll();
								selectRow(index);
								onOpenChange(true, row);
							}
							if (rowsSelect.includes(index)) {
								unSelectRow(index);
								selectRow(index);
							}
						}}
						className={cn(
							'h-12 cursor-pointer border-b border-gray-900 bg-gray-800 text-foreground hover:bg-gray-800/90',
							rowsSelect.includes(index) && 'bg-gray-800/90'
						)}
					>
						{isSelectableLines && (
							<td
								className='h-5 w-1.5'
								id={`table-checkbox-input-td-${row.uuid}`}
							>
								<input
									type='checkbox'
									className='peer mx-4 h-4 w-4 cursor-pointer rounded-md border-gray-500 bg-transparent text-primary focus:ring-primary'
									checked={rowsSelect.includes(index)}
									onChange={(event) => {
										event.currentTarget.checked
											? selectRow(index)
											: unSelectRow(index);
									}}
								/>
							</td>
						)}

						{actions && actions.length !== 0 && !hideActionButton && (
							<td className='w-24' id='table-dropdown-menu-td'>
								<TableDropdownMenu
									rowIndex={index}
									onOpenChange={onOpenChange}
									row={row}
									actions={actions}
								/>
							</td>
						)}

						{columns.map(
							(
								{ column, render, hidden, sharesColumn = false, items = [] },
								columnKey
							) => {
								if (hidden) return <></>;
								if (sharesColumn) {
									return (
										<td
											className={cn('pl-4 pr-3 text-sm sm:pl-6', classNameRow)}
											id='table-dropdown-menu-td'
											key={columnKey}
										>
											<TableTriggerActions
												onOnpenChange={(open) => {
													const shouldUnselectAll = !rowsSelect.includes(index);
													if (shouldUnselectAll) {
														unSelectAll();
														selectRow(index);
													}

													onOpenChange(open, row);
												}}
												items={items}
											/>
										</td>
									);
								}
								return (
									<td
										className={cn(
											'whitespace-nowrap pl-4 pr-3 text-sm text-white border-gray-900 bg-gray-800 hover:bg-gray-800/90 *:pointer-events-none sm:pl-6',
											classNameRow
										)}
										key={columnKey}
									>
										{render !== undefined
											? render(row, index)
											: String(row[column])}
									</td>
								);
							}
						)}
					</tr>
				))}

				{/* NÃO TIRAR */}
				{/* Essa linha serve como base para a paginação infinita do React Query. */}
				<tr id='last-row'></tr>

				{isLoading && rows.length >= 0 && (
					<tr>
						<td colSpan={columns.length} className='py-4'>
							<Spinner className='mx-auto' />
						</td>
					</tr>
				)}
			</tbody>
		</ContextMenu.Trigger>
	);
};

export default TableRow;

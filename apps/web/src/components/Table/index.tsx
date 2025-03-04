import { cn } from 'src/@shared/utils';

import { Spinner } from '../Spinner';
import { EmptyStateRequest } from '../@composition/EmptyState/Request';
import { ContextMenu } from '../@composition/ContextMenu';
import { TableProvider } from './context/TableContext';
import { baseEntity, TableProps } from './interface/ITableProps';
import Pagination from './Pagination';
import { TableContextMenu } from './TableContextMenu';
import { TableEmptyState } from './TableEmptyState';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export function Table<T extends baseEntity = any>({
	rows,
	columns,
	isSelectableLines,
	onSelectable,
	onTableRowClick,
	rightClickContent = false,
	keyExtractor,
	classNameRow,
	classNameBody,
	classNameContainer,
	isLoading = false,
	className,
	actions = [],
	classNameEmptyState,
	onOpenChange = () => {},
	onScrollEnd,
	hideActionButton,
	customEmptyState: CustomEmptyState = TableEmptyState,
	onReorder,
	reorderColumns = false,
	...rest
}: TableProps<T>) {
	const props = {
		columns: columns.filter(({ shouldRender }) => shouldRender ?? true),
		rows,
		isSelectableLines,
	};

	if (rest.showPagination) {
		if (!rest.queryPaginationControll) {
			throw new Error('Gerenciador de paginação não encontrado.');
		}
	}

	return (
		<TableProvider
			rows={rows}
			onSelectable={onSelectable}
			onTableRowClick={onTableRowClick}
			keyExtractor={keyExtractor}
			config={rest.config}
		>
			<ContextMenu.Root>
				<div
					className={cn(
						'app-scrollbar-nested h-full max-h-full w-full overflow-y-auto rounded-md border border-gray-900 bg-accent shadow-sm',
						classNameContainer
					)}
				>
					{rows.length !== 0 ? (
						<table
							className={cn(
								'app-scrollbar-nested font-inter h-full max-h-full w-full overflow-y-auto bg-gray-900',
								className
							)}
							{...rest}
						>
							<TableHeader
								{...props}
								hideActionButton={hideActionButton}
								actions={actions}
								onReorder={onReorder}
								reorderColumns={reorderColumns}
							/>
							<TableRow
								{...props}
								classNameRow={classNameRow}
								classNameBody={classNameBody}
								onTableRowClick={onTableRowClick}
								actions={actions}
								onOpenChange={onOpenChange}
								onScrollEnd={onScrollEnd}
								isLoading={isLoading}
								hideActionButton={hideActionButton}
							/>
						</table>
					) : (
						<div className={cn('h-full', classNameEmptyState)}>
							<EmptyStateRequest.Root>
								{isLoading ? (
									<>
										<Spinner className='mx-auto' />
										<EmptyStateRequest.Title text='Buscando dados para visualização' />
										<EmptyStateRequest.Description text='Aguarde os dados da tabela para aproveitar todas as funcionalidades disponíveis' />
									</>
								) : (
									<CustomEmptyState />
								)}
							</EmptyStateRequest.Root>
						</div>
					)}
				</div>
				{rest.showPagination && (
					<Pagination
						queryPaginationControll={rest.queryPaginationControll}
						showActions={true}
						isLoadingData={isLoading}
						onChangePage={rest.onChangePage}
						disabledPageParams={rest.disabledPageParams}
					/>
				)}

				{rightClickContent}

				<TableContextMenu rows={rows} actions={actions} />
			</ContextMenu.Root>
		</TableProvider>
	);
}

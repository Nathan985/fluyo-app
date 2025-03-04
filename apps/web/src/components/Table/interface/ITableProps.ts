import { IPaginationTable } from "@shared/interfaces/@shared/PaginationTable"
import { UseQueryResult } from "@tanstack/react-query"
import { ComponentProps, ComponentType, ReactNode } from "react"

export type baseEntity = object & { uuid?: string }

export type ColumnProps<T extends baseEntity> = {
	column: keyof T
	label?: string
	render?: (rawObjecct: T, index: number) => string | ReactNode
	renderHeader?: () => string | ReactNode
	shouldRender?: boolean
	hidden?: boolean
}

export interface TableProviderProps<T extends baseEntity> {
	onSelectable?: (values: T[]) => void
	children: ReactNode
	rows: T[]
	onTableRowClick?: (item: T) => void
	keyExtractor?: (item: T) => string
	config?: {
		unSelectForUpdate?: boolean
	}
}

export interface ITableAction<T> {
	key: string
	label: ReactNode
	onClick?: (item: T[], index: number, actionKey?: string) => void
	onAsyncClick?: (item: T[], index: number, actionKey?: string) => Promise<void>
	subActions?: ITableAction<T>[]
	shouldHide?: (itens: T[], origin: "context" | "dropdown") => boolean
	shouldHideOnMultiple?: boolean
	element?: ReactNode
	disabled?: boolean
	icon?: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
			title?: string
			titleId?: string
		} & React.RefAttributes<SVGSVGElement>
	>
}

export interface TableDefault<T extends baseEntity>
	extends ComponentProps<"table"> {
	rows: T[]
	onSelectable?: (values: T[]) => void
	columns: ColumnProps<T>[]
	buttonText?: string
	isSelectableLines?: boolean
	classNameContainer?: string
	classNameRow?: string
	classNameBody?: string
	onTableRowClick?: (item: T) => void
	rightClickContent?: ReactNode
	keyExtractor?: (item: T) => string
	isLoading?: boolean
	config?: {
		unSelectOnRightClick?: boolean
		unSelectForUpdate?: boolean
	}
	actions?: ITableAction<T>[]
	classNameEmptyState?: string
	onOpenChange?: (open: boolean, item: T) => void
	onScrollEnd?: () => void
	showPagination?: false
	hideActionButton?: boolean
	customEmptyState?: ComponentType
	onReorder?: (data: ColumnProps<T>[]) => void
	reorderColumns?: boolean
}

export type TablePropsWithFooter<T extends baseEntity> = Omit<
	TableDefault<T>,
	"showPagination"
> & {
	showPagination?: true
	queryPaginationControll: UseQueryResult<IPaginationTable, Error>
	onChangePage?: (page: number) => void
	disabledPageParams?: boolean
}

export type TableProps<T extends baseEntity> =
	| TableDefault<T>
	| TablePropsWithFooter<T>

export interface TableHeaderProps<T extends baseEntity> {
	columns: ColumnProps<T>[]
	rows: T[]
	enableAction?: boolean
	isSelectableLines?: boolean
	actions?: ITableAction<T>[]
	hideActionButton?: boolean
	onReorder?: (data: ColumnProps<T>[]) => void
	reorderColumns: boolean
}

export interface TableRowProps<T extends baseEntity> {
	rows: T[]
	columns: ColumnProps<T>[]
	isSelectableLines?: boolean
	classNameRow?: string
	classNameBody?: string
	onTableRowClick?: (item: T) => void
	onScrollEnd?: () => void
	isLoading?: boolean
	config?: {
		unSelectOnRightClick?: boolean
	}
	actions?: ITableAction<T>[]
	onOpenChange?: (open: boolean, item: T) => void
	hideActionButton?: boolean
}
export interface TableContextMenuProps<T extends baseEntity> {
	rows: T[]
	actions?: ITableAction<T>[]
}

export interface TableDropdownMenuProps<T> {
	row: T
	actions?: ITableAction<T>[]
	onOpenChange: (open: boolean, item: T) => void
	rowIndex: number
}

export interface TableContextMenuItemProps<T extends baseEntity> {
	rows: T[]
	action: ITableAction<T>
}

export type ITableContext<T extends baseEntity> = {
	rows: T[]
	rowsSelect: any[]
	selectRow: (value: any) => void
	unSelectRow: (value: any) => void
	selectAll: (total: Array<any>) => void
	onHandleSelectRow: (indexRow: number) => void
	unSelectAll: () => void
}

import _ from "lodash"
import { createContext, useEffect, useState } from "react"

import {
	baseEntity,
	ITableContext,
	TableProviderProps,
} from "../interface/ITableProps"

export const TableContext = createContext({} as ITableContext<any>)

export const TableProvider = <T extends baseEntity>({
	children,
	onSelectable,
	rows,
	keyExtractor,
	config = { unSelectForUpdate: true },
}: TableProviderProps<T>) => {
	const [rowsSelect, setRowsSelect] = useState<number[]>([])
	const [selectedItemsUniqueIdentifiers] = useState<string[]>([])

	useEffect(() => {
		if (config?.unSelectForUpdate) {
			setRowsSelect([])
		}
	}, [rows])

	useEffect(() => {
		onSelectable && onSelectable(findRows())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rowsSelect])

	const findRows = () => {
		return rowsSelect.map((index) => rows[index])
	}

	const onHandleSelectRow = (indexRow: number) => {
		const rowsSelected = rowsSelect.includes(indexRow)
		!rowsSelected && unSelectAll()
		selectRow(indexRow)
	}

	useEffect(() => {
		if (!keyExtractor) return

		const updatedSelectedRows = rows
			.filter((item) =>
				_.includes(selectedItemsUniqueIdentifiers, keyExtractor?.(item))
			)
			.map((item) => rows.findIndex((row) => _.isEqual(row, item)))

		setRowsSelect(updatedSelectedRows)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rows])

	const selectRow = (index: number) => {
		setRowsSelect((oldState) => [...oldState, index])
	}

	const unSelectRow = (index: number) => {
		const filteredData = rowsSelect.filter((val) => val !== index)
		setRowsSelect(filteredData)
	}

	const selectAll = () => {
		const indexRows = rows.map((_, index) => index)
		setRowsSelect(indexRows)
	}

	const unSelectAll = () => {
		setRowsSelect([])
	}

	return (
		<TableContext.Provider
			value={{
				rowsSelect,
				selectRow,
				unSelectRow,
				selectAll,
				unSelectAll,
				onHandleSelectRow,
				rows,
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

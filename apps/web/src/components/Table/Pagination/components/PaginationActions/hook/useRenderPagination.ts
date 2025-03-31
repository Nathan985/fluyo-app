import useControlled from "@mui/utils/useControlled"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import {
	IItemsPagination,
	IPaginationHookProps,
	IPaginationHookType,
} from "../types/paginationActions.hook.type"

export const useRenderPagination: IPaginationHookType = (props = {}) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get("page") || "1"

	const getDefaultPage = () => {
		const parserPageParam = Number(pageParams) || 1
		if (parserPageParam > count) {
			return count
		}

		if (parserPageParam < 1) {
			return 1
		}

		return parserPageParam
	}

	const {
		boundaryCount = 1,
		count = 1,
		defaultPage = props.disabledPageParams ? 1 : getDefaultPage(),
		disabled = false,
		hideNextButton = false,
		hidePrevButton = false,
		onChangePage: handleChange,
		siblingCount = 1,
		page: pageProp,
	}: IPaginationHookProps = props

	const [page, setPageState] = useControlled({
		controlled: pageProp,
		default: defaultPage,
		name: `usePagination`,
		state: "page",
	})

	const checkValidPage = () => {
		const totalPages = props.count || 1
		if (page > totalPages || page < 1) {
			onHandleClick(1)
		}
	}

	useEffect(() => {
		checkValidPage()
	}, [props])

	useEffect(() => {
		handleChange && handleChange(page)
	}, [])

	const onHandleClick = (value: number) => {
		if (!pageProp) {
			setPageState(value)
			setSearchParams({ page: value.toString() })
		}
		if (handleChange) {
			handleChange(value)
		}
	}

	const range = (start: number, end: number) => {
		const length = end - start + 1
		return Array.from({ length }, (_, i) => start + i)
	}

	const startPages = range(1, Math.min(boundaryCount, count))
	const endPages = range(
		Math.max(count - boundaryCount + 1, boundaryCount + 1),
		count
	)

	const siblingsStart = Math.max(
		Math.min(
			// Natural start
			page - siblingCount,
			// Lower boundary when page is high
			count - boundaryCount - siblingCount * 2 - 1
		),
		// Greater than startPages
		boundaryCount + 2
	)

	const siblingsEnd = Math.min(
		Math.max(
			// Natural end
			page + siblingCount,
			// Upper boundary when page is low
			boundaryCount + siblingCount * 2 + 2
		),
		// Less than endPages
		count - boundaryCount - 1
	)

	const itemList = [
		...(hidePrevButton ? [] : ["previous"]),
		...startPages,

		// Start ellipsis
		// eslint-disable-next-line no-nested-ternary
		...(siblingsStart > boundaryCount + 2
			? ["start-ellipsis"]
			: boundaryCount + 1 < count - boundaryCount
				? [boundaryCount + 1]
				: []),

		// Sibling pages
		...range(siblingsStart, siblingsEnd),

		// End ellipsis
		// eslint-disable-next-line no-nested-ternary
		...(siblingsEnd < count - boundaryCount - 1
			? ["end-ellipsis"]
			: count - boundaryCount > boundaryCount
				? [count - boundaryCount]
				: []),

		...endPages,
		...(hideNextButton ? [] : ["next"]),
	]

	const buttonPage = (type: string) => {
		switch (type) {
			case "first":
				return 1
			case "previous":
				return page - 1
			case "next":
				return page + 1
			case "last":
				return count
			default:
				return null
		}
	}

	const items: IItemsPagination[] = itemList.map((item) => {
		return typeof item === "number"
			? ({
					onClick: () => {
						onHandleClick(item)
					},
					type: "page",
					page: item,
					selected: item === page,
					disabled,
					"aria-current": item === page ? "true" : undefined,
				} as IItemsPagination)
			: ({
					onClick: () => {
						onHandleClick(buttonPage(item) as number)
					},
					type: item,
					page: buttonPage(item),
					selected: false,
					disabled:
						disabled ||
						(item.indexOf("ellipsis") === -1 &&
							(item === "next" || item === "last" ? page >= count : page <= 1)),
				} as IItemsPagination)
	})

	return {
		items,
	}
}

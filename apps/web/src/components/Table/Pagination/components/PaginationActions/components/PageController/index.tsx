import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import React, { ReactNode } from "react"

import { useRenderPagination } from "../../hook/useRenderPagination"
import { IPaginationHookProps } from "../../types/paginationActions.hook.type"
import PageButton from "../PageButton"

const PageController: React.FC<IPaginationHookProps> = (props = {}) => {
	const Elements: Array<ReactNode> = []
	const { items } = useRenderPagination(props)

	items.forEach((item) => {
		if (item.type === "previous") {
			Elements.push(
				<button
					disabled={item.disabled}
					onClick={item.onClick}
					className="relative inline-flex items-center rounded-l-md px-2 py-2 text-muted-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 disabled:text-gray-400 disabled:hover:bg-transparent"
				>
					<span className="sr-only">Voltar</span>
					<ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
				</button>
			)
		}

		if (item.type === "next") {
			Elements.push(
				<button
					disabled={item.disabled}
					onClick={item.onClick}
					className="relative inline-flex items-center rounded-r-md px-2 py-2 text-muted-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 disabled:text-muted disabled:hover:bg-transparent"
				>
					<span className="sr-only">Próximo</span>
					<ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
				</button>
			)
		}

		if (item.type === "page") {
			Elements.push(
				<PageButton
					isPage
					value={item.page as number}
					isCurrentPage={item.selected}
					onClick={item.onClick}
				/>
			)
		}

		if (item.type === "end-ellipsis" || item.type === "start-ellipsis") {
			Elements.push(<PageButton isPage={false} value="..." />)
		}
	})

	return Elements
}

export default PageController

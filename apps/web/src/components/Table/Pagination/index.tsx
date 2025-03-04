import React, { useMemo } from "react"

import PaginationActions from "./components/PaginationActions"
import PaginationInfo from "./components/PaginationInfo"
import { IPaginationComponentType, IPaginationType } from "./types"
// import { usePagination } from './usePagination';

const Pagination: React.FC<IPaginationType<any>> = ({
	queryPaginationControll,
	...props
}) => {
	const propsController: IPaginationComponentType = useMemo(
		() => ({
			totalPages: queryPaginationControll.data?.totalPage,
			isLoading: queryPaginationControll.status === "pending",
			...props,
		}),
		[queryPaginationControll, props]
	)

	return (
		<div className="flex items-center justify-between border-t border-border bg-background px-4 py-3 sm:px-6">
			<div className="flex flex-1 items-center justify-between">
				<PaginationInfo {...propsController} />
				<PaginationActions {...propsController} />
			</div>
		</div>
	)
}

export default Pagination

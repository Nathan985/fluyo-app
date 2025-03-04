export type IPaginationHookProps = {
	boundaryCount?: number
	count?: number
	defaultPage?: number
	disabled?: boolean
	page?: number
	hideNextButton?: boolean
	hidePrevButton?: boolean
	onChangePage?: (page: number) => void
	siblingCount?: number
	disabledPageParams?: boolean
}

export type IItemsPagination = {
	onClick: () => void
	type: "page" | "start-ellipsis" | "end-ellipsis" | "previous" | "next"
	page: number | null
	selected: boolean
	disabled: boolean
	"aria-current": string | undefined
}

export type IPaginationHookResponse = {
	items: IItemsPagination[]
}

export type IPaginationHookType = (
	props?: IPaginationHookProps
) => IPaginationHookResponse

export type IPaginationActionsController = {
	showActions: boolean
	isLoading?: boolean
	onChangePage?: (page: number) => void
}

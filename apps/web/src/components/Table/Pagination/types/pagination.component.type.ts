import { baseEntity, TablePropsWithFooter } from "../../interface/ITableProps"
import { IPaginationActionsController, IPaginationState } from "."

export type IPaginationComponentType = IPaginationActionsController &
	IPaginationState

export type IPaginationType<T extends baseEntity> = Pick<
	TablePropsWithFooter<T>,
	"queryPaginationControll"
> &
	IPaginationActionsController &
	Pick<IPaginationState, "isLoadingData" | "disabledPageParams">

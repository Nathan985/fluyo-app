import { IActionType } from "./action.base"

type IImplementActionProps<T = undefined> = T

export type IImplementAction<T = undefined> = (
	props: IImplementActionProps<T>
) => IActionType

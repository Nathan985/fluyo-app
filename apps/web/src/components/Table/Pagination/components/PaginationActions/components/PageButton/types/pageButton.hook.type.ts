import { IPageButtonComponentType } from "./pageButton.component.type"

export type IPageButtonHookProps = Pick<
	IPageButtonComponentType,
	"isCurrentPage" | "onClick" | "isPage"
>
export type IPageButtonHookResponse = {
	onHandleClick: (value: number | string) => void
	styleButton: string
}
export type IPageButtonHookType<T> = (props: T) => IPageButtonHookResponse

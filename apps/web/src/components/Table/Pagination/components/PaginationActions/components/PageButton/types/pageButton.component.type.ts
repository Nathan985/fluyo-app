export type IButtonNumberValueProps = {
	isPage?: true
	value: number
}

export type IButtonTextValueProps = {
	isPage?: false
	value: string
}

export type IButtonProps = IButtonTextValueProps | IButtonNumberValueProps

export type IPageButtonComponentType = IButtonProps & {
	onClick?: (page: number) => void
	isCurrentPage?: boolean
}

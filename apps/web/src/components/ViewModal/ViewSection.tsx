import { cn } from "src/@shared/utils"
import { ComponentProps } from "react"

interface ViewSectionContentProps extends ComponentProps<"div"> {}

const ViewSectionContent = ({
	className,
	...rest
}: ViewSectionContentProps) => (
	<div className={cn("grid grid-cols-1 sm:grid-cols-2", className)} {...rest} />
)

interface DataViewSectionHeaderProps extends ComponentProps<"h3"> {}

const ViewSectionTitle = ({
	className,
	...rest
}: DataViewSectionHeaderProps) => (
	<h3
		className={cn(
			"border-b border-border px-4 py-2 text-base font-semibold leading-7 text-muted border-gray-500 sm:px-0",
			className
		)}
		{...rest}
	/>
)

interface DataViewSectionEmptyStateProps extends ComponentProps<"div"> {}

const ViewSectionEmpty = ({
	className,
	...rest
}: DataViewSectionEmptyStateProps) => (
	<div
		className={cn(
			"mt-4 flex h-40 items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-sm text-muted-foreground",
			className
		)}
		{...rest}
	/>
)

export { ViewSectionContent, ViewSectionEmpty, ViewSectionTitle }

import { cn } from "src/@shared/utils" 
import { ComponentProps } from "react"

export interface ViewLabelValueProps extends ComponentProps<"div"> {
	label: string
	value?: React.ReactNode
	classNameValue?: string
}

export function ViewLabelValue({
	label,
	value,
	className,
	classNameValue,
	...rest
}: ViewLabelValueProps) {
	return (
		<div className={cn("border-b border-gray-500 py-3", className)} {...rest}>
			<dt className="text-sm font-medium leading-6  text-whtie">{label}</dt>
			<dd
				className={cn(
					"col-span-2 text-sm leading-6 text-gray-300",
					classNameValue
				)}
			>
				{value ?? "--"}
			</dd>
		</div>
	)
}

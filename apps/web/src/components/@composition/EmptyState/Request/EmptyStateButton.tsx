import { ComponentProps } from "react"

type EmptyStateButtonProps = ComponentProps<"button"> & {
	text: string
}

export function EmptyStateButton({ text, ...rest }: EmptyStateButtonProps) {
	return (
		<div className="mt-6">
			<button
				{...rest}
				type="button"
				className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				{text}
			</button>
		</div>
	)
}

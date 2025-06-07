import { cn } from "src/@shared/utils";

export function EmptyStateTitle({ text, className }: { text: string, className?: string }) {
	return <h3 className={
		cn(
			"mt-2 text-sm font-semibold text-foreground",
			className
		)
	}>{text}</h3>
}

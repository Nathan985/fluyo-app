import { cn } from "src/@shared/utils"
import { ReactNode } from "react"

import {
	Dialog,
	DialogCloseButton,
	DialogContent,
	DialogHeader,
} from "../@composition/Dialog"

export interface ViewModalProps {
	open: boolean
	onClose: () => void
	title: string
	className?: string
	children?: ReactNode
	dialogContentClassName?: string
}

const ViewModal = ({
	open,
	onClose,
	title,
	children,
	dialogContentClassName,
}: ViewModalProps) => (
	<Dialog open={open} onOpenChange={onClose}>
		<DialogContent
			position="right"
			className={cn(
				"flex h-screen flex-col gap-0 p-0 lg:w-[40vw]",
				dialogContentClassName
			)}
		>
			<DialogHeader className="mx-6 mt-6 pb-4">
				<DialogCloseButton />

				{title && (
					<span className="text-lg font-medium text-white">{title}</span>
				)}
			</DialogHeader>

			<div className="app-scrollbar flex h-full flex-col gap-10 overflow-y-scroll p-6 pb-20">
				{children}
			</div>
		</DialogContent>
	</Dialog>
)

export { ViewModal }

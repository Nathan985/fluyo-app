import { useContext } from "react"
import { tv } from "tailwind-variants"

import { ClassNameType, InputContext } from "./context/InputContext"

export const useInput = () => {
	const { showError, possitionIcon, useAddIcon } = useContext(InputContext)

	const visibleError = !showError && "hidden"
	const inputError = showError && "ring-destructive focus:ring-destructive/80"

	const errorIcon = tv({
		base: "pointer-events-none absolute inset-y-0 flex items-center",
		variants: {
			side: {
				left: "right-0 pr-3",
				"left-iconed": "right-0 pr-3",
				right: "left-0 pl-3",
				"right-iconed": "left-0 pl-3",
			} as ClassNameType,
		},
	})

	const iconClass = tv({
		base: "pointer-events-none absolute inset-y-0 flex items-center",
		variants: {
			side: {
				left: "",
				"left-iconed": "left-0 pl-3",
				right: "",
				"right-iconed": "right-0 pr-3",
			} as ClassNameType,
		},
	})

	const inputClass = tv({
		base: `block bg-transparent w-full rounded-md py-1.5 text-foreground border-none ring-1 ring-inset ring-input hover:ring-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 ${
			showError && possitionIcon === "right" && "pl-10"
		} ${showError && possitionIcon === "left" && "pr-10"}`,
		variants: {
			side: {
				left: `rounded-none ${useAddIcon ? "rounded-r-md" : "rounded-md"}`,
				"left-iconed": "pl-10",
				right: `rounded-none ${useAddIcon ? "rounded-l-md" : "rounded-md"}`,
				"right-iconed": "pr-10",
			} as ClassNameType,
		},
	})

	const groupClass = tv({
		base: "flex relative w-full flex-row rounded-md",
		variants: {
			side: {
				left: "flex-row",
				"left-iconed": "",
				right: "flex-row-reverse",
				"right-iconed": "",
			} as ClassNameType,
		},
	})

	const defaultAddOn = tv({
		base: "inline-flex items-center bg-accent border border-border border-r-none px-3 text-muted-foreground sm:text-sm",
		variants: {
			side: {
				left: "rounded-l-md border-r-0",
				"left-iconed": "",
				right: "rounded-r-md border-l-0",
				"right-iconed": "",
			} as ClassNameType,
		},
	})

	return {
		visibleError,
		inputError,
		iconClass,
		inputClass,
		errorIcon,
		groupClass,
		defaultAddOn,
	}
}

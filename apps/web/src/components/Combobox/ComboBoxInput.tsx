import { Combobox as HCombobox } from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { ChangeEvent } from "react"

type ComboBoxInputProps<T> = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	displayValueGetter: (item: T) => string
	handleOpenOptions: () => void
	placeholder?: string
	showPlaceholder?: boolean
}

export function ComboBoxInput<T>({
	displayValueGetter,
	onChange,
	handleOpenOptions,
	placeholder,
	showPlaceholder,
}: ComboBoxInputProps<T>) {
	return (
		<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
			<HCombobox.Input
				multiple={true}
				className="w-full rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
				displayValue={displayValueGetter}
				onChange={onChange}
				placeholder={showPlaceholder ? placeholder : undefined}
			/>

			<button
				type="button"
				onClick={handleOpenOptions}
				data-testid="trigger"
				className="absolute inset-y-0 right-0 z-50 flex items-center pr-2"
			>
				<ChevronUpDownIcon
					className="h-5 w-5 text-gray-400"
					aria-hidden="true"
				/>
			</button>
		</div>
	)
}

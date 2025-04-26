import { Combobox as HCombobox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { cn } from 'src/@shared/utils';
import { Fragment } from 'react';

import { Spinner } from 'src/components/Spinner';

type ComboBoxOptionsProps<T> = {
	nothingFound: boolean;
	onOptionsLeave: () => void;
	data: T[];
	keyExtractor: (item: T) => string;
	displayValueGetter: (item: T) => string;
	handlePointerLeave: () => void;
	isOptionsOpen: boolean;
	loadingRequestChange?: boolean;
	position?: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};
	className?: string;
	width?: number;
};

export function ComboBoxOptions<T>({
	data,
	nothingFound,
	onOptionsLeave,
	keyExtractor,
	displayValueGetter,
	handlePointerLeave,
	isOptionsOpen,
	loadingRequestChange,
	position,
	className,
	width,
}: ComboBoxOptionsProps<T>) {
	return (
		<Transition
			as={Fragment}
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
			afterLeave={onOptionsLeave}
			show={isOptionsOpen}
		>
			<HCombobox.Options
				onPointerLeave={handlePointerLeave}
				data-testid='options'
				static
				style={
					position
						? {
								top: isOptionsOpen ? `${position?.top}px` : undefined,
								left: isOptionsOpen ? `${position?.left}px` : undefined,
								right: isOptionsOpen
									? `calc(100vw - ${position?.right}px)`
									: undefined,
								bottom: isOptionsOpen ? `${position?.bottom}px` : undefined,
								width,
							}
						: { width }
				}
				className={cn(
					'z-50 mt-1 flex max-h-[20em] min-h-[fit-content] flex-col overflow-y-auto overflow-x-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
					className,
					isOptionsOpen && '!fixed z-[70]'
				)}
			>
				{nothingFound && loadingRequestChange !== true && (
					<div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
						Nothing found.
					</div>
				)}
				{!nothingFound &&
					data.map((item) => (
						<HCombobox.Option
							key={keyExtractor(item)}
							className={({ active }) =>
								`relative cursor-default select-none py-2 pl-10 pr-4 ${
									active ? 'bg-indigo-600 text-white' : 'text-gray-900'
								}`
							}
							value={item}
						>
							{/* @ts-ignore */}
							{({ selected, active }) => (
								<>
									<span
										className={`block cursor-pointer truncate ${
											selected ? 'font-medium' : 'font-normal'
										}`}
									>
										{displayValueGetter(item)}
									</span>
									{selected ? (
										<span
											className={`absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3 ${
												active ? 'text-white' : 'text-indigo-600'
											}`}
										>
											<CheckIcon className='h-5 w-5' aria-hidden='true' />
										</span>
									) : null}
								</>
							)}
						</HCombobox.Option>
					))}
				{loadingRequestChange && loadingRequestChange === true && (
					<div className='relative flex w-full items-center justify-center p-1'>
						<Spinner className='h-5 w-5' />
					</div>
				)}
			</HCombobox.Options>
		</Transition>
	);
}

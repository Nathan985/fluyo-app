import { Combobox, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import { Badge } from 'src/components/Badge';

type ComboBoxSelectedOptionsProps<T> = {
	selected: T[];
	keyExtractor: (item: T) => string;
	displayValueGetter: (item: T) => string;
	isOptionsOpen: boolean;
	handleChange: (data: T[]) => void;
};

export function ComboBoxSelectedOptions<T>({
	handleChange,
	selected,
	displayValueGetter,
	keyExtractor,
	isOptionsOpen,
}: ComboBoxSelectedOptionsProps<T>) {
	return (
		<Transition
			as={Fragment}
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
			show={!isOptionsOpen}
		>
			<div className='absolute left-1 top-1.5 flex max-w-[89%] gap-1 overflow-hidden bg-white p-0'>
				{selected.length > 0 &&
					selected[0] &&
					displayValueGetter(selected[0]).trim() !== '' && (
						<Combobox
							value={selected}
							multiple
							onChange={(event: T[]) => {
								Array.isArray(event)
									? handleChange(event)
									: handleChange([event]);
							}}
						>
							{selected.map(
								(item) =>
									displayValueGetter(item).trim() !== '' && (
										<Combobox.Option
											value={item}
											className='list-none'
											key={keyExtractor(item)}
										>
											<Badge
												className='whitespace-nowrap bg-primary/10 text-primary/80'
												label={displayValueGetter(item)}
												icon={
													<XMarkIcon className='h-4 w-4 cursor-pointer hover:text-white' />
												}
											/>
										</Combobox.Option>
									)
							)}
						</Combobox>
					)}
			</div>
		</Transition>
	);
}

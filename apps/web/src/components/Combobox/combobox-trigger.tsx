import { PopoverTriggerProps } from '@radix-ui/react-popover';
import React from 'react';

import { PopoverTrigger } from '../@composition/Popover';
import { ComboboxMultipleTriggerImpl } from './combobox-multiple-trigger-impl';
import { ComboboxSingleTriggerImpl } from './combobox-single-trigger-impl';
import { useCombobox } from './index';
PopoverTrigger;

export interface ComboboxTriggerProps extends PopoverTriggerProps {
	placeholder?: string;
}

export const ComboboxTrigger = React.forwardRef<
	HTMLButtonElement,
	ComboboxTriggerProps
>((rest, ref) => {
	const { type, label, error, helpText } = useCombobox();

	return (
		<PopoverTrigger ref={ref} {...rest} className='flex w-full flex-col'>
			{label && (
				<label className='mb-1 text-start text-sm font-medium text-gray-300'>
					{label}
				</label>
			)}
			{type === 'single' ? (
				<ComboboxSingleTriggerImpl />
			) : (
				<ComboboxMultipleTriggerImpl />
			)}

			{error && (
				<small className='cursor-default text-destructive'>{error}</small>
			)}
			{helpText && (
				<small className='cursor-default text-gray-500'>{helpText}</small>
			)}
		</PopoverTrigger>
	);
});

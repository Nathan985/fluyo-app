import { XCircleIcon } from '@heroicons/react/24/outline';
import { cn } from 'src/@shared/utils';
import { ComponentProps, forwardRef, ReactNode } from 'react';

type TextAreaProps = ComponentProps<'textarea'> & {
	name: string;
	label: string;
	icon?: ReactNode;
	error?: string;
	containerClassName?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			placeholder,
			name,
			label,
			id,
			error,
			className,
			containerClassName,
			icon,
			...props
		},
		ref
	) => {
		const textAreaId = id ?? name;

		return (
			<div className={cn('w-full', containerClassName)}>
				<label
					htmlFor={name ?? id}
					className='block text-sm font-medium leading-6 text-gray-300'
				>
					{label}
				</label>

				<div className='relative mt-1'>
					<textarea
						{...props}
						ref={ref}
						name={name ?? id}
						autoComplete='off'
						id={textAreaId}
						placeholder={placeholder}
						className={cn(
							'block w-full rounded-md border-0 bg-transparent py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
							error && 'border-1 !border-destructive focus:ring-0',
							className
						)}
					/>

					{icon && (
						<div className='absolute right-2 top-1/2 -translate-y-1/2'>
							{icon}
						</div>
					)}
				</div>

				{error && (
					<div className='mt-2 flex items-center gap-2 text-destructive'>
						<XCircleIcon className='h-4 w-4' />
						<span className='text-sm'>{error}</span>
					</div>
				)}
			</div>
		);
	}
);

TextArea.displayName = 'TextArea';

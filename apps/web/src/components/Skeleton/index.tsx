import { cn } from 'src/@shared/utils';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {}

function Skeleton({ className, ...props }: Props) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-gray-600/10', className)}
			{...props}
		/>
	);
}

export { Skeleton };

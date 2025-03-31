import { cn } from 'src/@shared/utils';
import { ReactNode } from 'react';

export function EmptyStateRoot({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'flex h-full w-full items-center justify-center text-center',
				className
			)}
		>
			<div>{children}</div>
		</div>
	);
}

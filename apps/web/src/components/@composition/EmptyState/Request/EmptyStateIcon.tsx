import { cn } from 'src/@shared/utils';
import { ElementType } from 'react';

interface EmptyStateProps {
	icon: ElementType;
	className?: string;
}

export function EmptyStateIcon({ icon: Icon, className }: EmptyStateProps) {
	return <Icon className={cn('mx-auto h-12 w-12 text-gray-400', className)} />;
}

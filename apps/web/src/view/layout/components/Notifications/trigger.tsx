import { BellAlertIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { cn } from 'src/@shared/utils';
import { Button } from 'src/components/Button';
import { Spinner } from 'src/components/Spinner';

export const Trigger: React.FC<{ isLoading?: boolean, notificationCount?: number }> = ({ isLoading = false, notificationCount = 0 }) => {
  return (
    <Button
		variant="outline"
		size="icon"
		className="relative"
		disabled={isLoading}
	>
		<BellAlertIcon className={cn("h-5 w-5", isLoading && "opacity-50")} />

		{isLoading && (
			<div className="absolute -right-1 -top-1 flex min-h-[1.15rem] min-w-[1.15rem] items-center justify-center rounded-full border border-border bg-nav font-bold text-destructive-foreground">
				<Spinner className="bottom-0 left-0 right-0 top-0 h-2.5 w-2.5" />
			</div>
		)}

		{!isLoading && notificationCount !== 0 && (
			<div className="absolute -right-1.5 -top-1.5 flex max-h-[1.15rem] min-w-[1.15rem] items-center justify-center rounded-full bg-destructive px-1.5 text-[0.70rem] font-bold text-destructive-foreground shadow">
				<span>{notificationCount}</span>
			</div>
		)}
	</Button>
  )
}

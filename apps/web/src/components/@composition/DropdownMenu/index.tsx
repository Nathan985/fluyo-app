import { ChevronRightIcon } from '@heroicons/react/24/outline';
import * as RdxDropdown from '@radix-ui/react-dropdown-menu';
import { cn } from 'src/@shared/utils';
import React, { ComponentProps } from 'react';

const Root = RdxDropdown.Root;

const Sub = RdxDropdown.Sub;

type DropdownMenuTriggerProps = ComponentProps<
	typeof RdxDropdown.DropdownMenuTrigger
>;

function Trigger({ className, ...rest }: DropdownMenuTriggerProps) {
	return (
		<RdxDropdown.Trigger
			className={cn(
				'flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-semibold leading-6 text-foreground ring-1 ring-border transition-all hover:bg-muted',
				'outline-none',
				className
			)}
			{...rest}
		/>
	);
}

interface DropdownMenuContentProps
	extends ComponentProps<typeof RdxDropdown.Content> {}

function Content({
	children,
	className,
	side = 'bottom',
	...rest
}: DropdownMenuContentProps) {
	return (
		<RdxDropdown.Portal>
			<RdxDropdown.Content
				side={side}
				className={cn(
					'z-[50] my-1 flex w-fit flex-col gap-1 divide-border overflow-hidden rounded-md border border-border bg-popover p-1.5 text-popover-foreground shadow-md',
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					className
				)}
				{...rest}
			>
				{children}
			</RdxDropdown.Content>
		</RdxDropdown.Portal>
	);
}

interface DropdownMenuItemProps
	extends ComponentProps<typeof RdxDropdown.Item> {}

function Item({ children, className, ...rest }: DropdownMenuItemProps) {
	return (
		<RdxDropdown.Item
			{...rest}
			className={cn(
				'group relative flex h-8 min-w-[15rem] cursor-pointer select-none items-center gap-x-3 rounded-[3px] border-b border-border px-3 py-1.5 text-sm leading-none text-foreground outline-none last:border-b-0 data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 lg:py-2 2xl:py-2',
				className
			)}
		>
			{children}
		</RdxDropdown.Item>
	);
}

const SubTrigger = React.forwardRef<
	React.ElementRef<typeof RdxDropdown.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof RdxDropdown.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<RdxDropdown.SubTrigger
		ref={ref}
		className={cn(
			'flex cursor-default select-none items-center gap-2 rounded-sm border-b border-border py-1.5 pl-3 pr-1 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className='ml-auto h-4 w-4' />
	</RdxDropdown.SubTrigger>
));
SubTrigger.displayName = RdxDropdown.SubTrigger.displayName;

const SubContent = React.forwardRef<
	React.ElementRef<typeof RdxDropdown.SubContent>,
	React.ComponentPropsWithoutRef<typeof RdxDropdown.SubContent>
>(({ className, ...props }, ref) => (
	<RdxDropdown.SubContent
		ref={ref}
		className={cn(
			'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...props}
	/>
));

SubContent.displayName = RdxDropdown.SubContent.displayName;

export const DropdownMenu = {
	Root,
	Trigger,
	Content,
	Item,
	Sub,
	SubTrigger,
	SubContent,
};

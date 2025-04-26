import {
	CheckIcon as Check,
	ChevronRightIcon as ChevronRight,
	CircleStackIcon as Circle,
} from '@heroicons/react/24/outline';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from 'src/@shared/utils';
import * as React from 'react';

const Root = ContextMenuPrimitive.Root;

const Trigger = ContextMenuPrimitive.Trigger;

const Group = ContextMenuPrimitive.Group;

const Portal = ContextMenuPrimitive.Portal;

const Sub = ContextMenuPrimitive.Sub;

const RadioGroup = ContextMenuPrimitive.RadioGroup;

const SubTrigger = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<ContextMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(
			'flex cursor-default select-none items-center gap-2 rounded-sm border-b border-border py-1.5 pl-3 pr-1 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className='ml-auto h-4 w-4' />
	</ContextMenuPrimitive.SubTrigger>
));

SubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const SubContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.SubContent
		ref={ref}
		className={cn(
			'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...props}
	/>
));
SubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const RContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Portal>
		<ContextMenuPrimitive.Content
			ref={ref}
			className={cn(
				'z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-800 bg-gray-900 p-1 text-gray-200 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className
			)}
			{...props}
		/>
	</ContextMenuPrimitive.Portal>
));
RContent.displayName = ContextMenuPrimitive.Content.displayName;

const Item = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Item
		ref={ref}
		className={cn(
			'group relative flex h-8 min-w-[15rem] cursor-pointer select-none items-center gap-x-3 rounded-[3px] border-none px-3 py-1.5 text-sm leading-none text-foreground outline-none last:border-b-0 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-700 data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 lg:py-2 2xl:py-2',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
));
Item.displayName = ContextMenuPrimitive.Item.displayName;

const CheckboxItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<ContextMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground',
			className
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ContextMenuPrimitive.ItemIndicator>
				<Check className='h-4 w-4' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.CheckboxItem>
));
CheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const RadioItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<ContextMenuPrimitive.RadioItem
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground',
			className
		)}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ContextMenuPrimitive.ItemIndicator>
				<Circle className='h-4 w-4 fill-current' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.RadioItem>
));
RadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const Label = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Label
		ref={ref}
		className={cn(
			'px-2 py-1.5 text-sm font-semibold text-foreground',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
));
Label.displayName = ContextMenuPrimitive.Label.displayName;

const Separator = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-border', className)}
		{...props}
	/>
));
Separator.displayName = ContextMenuPrimitive.Separator.displayName;

const Shortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest text-muted-foreground',
				className
			)}
			{...props}
		/>
	);
};
Shortcut.displayName = 'ContextMenuShortcut';

type ContentProps = {
	className?: string;
	itemClassName?: string;
	options: {
		label: string;
		icon?: React.ReactNode;
		action: () => void;
		shouldRender?: boolean;
	}[];
};

export function Content({ options, className, itemClassName }: ContentProps) {
	return (
		<RContent className={cn(className)}>
			{options.map(
				(option, index) =>
					(option.shouldRender ?? true) && (
						<React.Fragment>
							<Item
								role='button'
								className={cn(itemClassName)}
								onClick={option.action}
								key={option.label}
							>
								<div className='text-gray-200 group-data-[highlighted]:text-gray-200 group-data-[disabled]:opacity-50'>
									{option.icon}
								</div>
								<span className='text-gray-200'>{option.label}</span>
							</Item>
							<div
								className={cn(
									'w-full border-b border-b-gray-700',
									index === options.length - 1 && 'hidden'
								)}
							/>
						</React.Fragment>
					)
			)}
		</RContent>
	);
}

export const ContextMenu = {
	Root,
	Trigger,
	RContent,
	Content,
	SubTrigger,
	SubContent,
	Item,
	Sub,
	Group,
	Shortcut,
	Portal,
	RadioGroup,
};

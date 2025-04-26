import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import React, { useRef } from 'react';
import { useDisclosure } from 'src/@shared/hooks/useDisclosure';
import { cn } from 'src/@shared/utils';
import { DropdownMenu } from 'src/components/@composition/DropdownMenu';

// import { Container } from './styles';

export interface DropdownItem {
	name?: string;
	href?: string;
	onClick?: () => void;
	shouldRender?: boolean;
}

type DropdownButtonProps = {
	items: DropdownItem[];
	className?: string;
	menuItemsClassname?: string;
	onOnpenChange?: (open: boolean) => void;
};

const TableTriggerActions: React.FC<DropdownButtonProps> = ({
	items,
	menuItemsClassname,
	onOnpenChange,
}) => {
	const dropdownDisclosure = useDisclosure();

	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownTriggerRef = useRef<HTMLDivElement>(null);
	const dropdownMenuItemRef = useRef<HTMLDivElement>(null);

	return (
		<DropdownMenu.Root
			open={dropdownDisclosure.isOpen}
			onOpenChange={onOnpenChange}
		>
			<DropdownMenu.Trigger asChild>
				<div
					ref={dropdownTriggerRef}
					className='h-8 w-8 rounded-full border border-gray-700 transition-all hover:bg-gray-800/50'
					onClick={dropdownDisclosure.onOpen}
				>
					<EllipsisHorizontalIcon className='h-4 w-4 fill-white' />
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				align='center'
				onPointerDownOutside={dropdownDisclosure.onClose}
				ref={dropdownRef}
				className={cn(
					'z-[50] my-1 flex w-fit flex-col gap-1 divide-gray-800 overflow-hidden rounded-md border border-gray-800 bg-gray-900 p-1.5 shadow-lg',
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
				)}
			>
				{items.map((item, index) => (
					<React.Fragment>
						<DropdownMenu.Item
							ref={dropdownMenuItemRef}
							key={index}
							onClick={item.onClick}
							className={cn(
								'group relative flex h-7 min-w-[15rem] cursor-pointer select-none items-center gap-x-3 rounded-[3px] border-none pb-3 text-sm leading-none text-gray-300 outline-none last:border-b-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-gray-800/70 focus:text-gray-300 lg:py-2 2xl:py-2',
								menuItemsClassname
							)}
						>
							{item.name}
						</DropdownMenu.Item>
						<div
							className={cn(
								'w-full border-b border-b-gray-700',
								index === items.length - 1 && 'hidden'
							)}
						/>
					</React.Fragment>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default TableTriggerActions;

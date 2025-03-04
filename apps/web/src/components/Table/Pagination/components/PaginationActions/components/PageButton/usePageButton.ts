import { cn } from 'src/@shared/utils';

import { IPageButtonHookProps, IPageButtonHookType } from './types';

export const usePageButton: IPageButtonHookType<IPageButtonHookProps> = ({
	isCurrentPage,
	onClick,
	isPage = true,
}) => {
	const styleButton = cn(
		isCurrentPage && isPage
			? 'relative z-10 inline-flex items-center ring-1 ring-inset ring-border sm:ring-0 sm:bg-primary px-4 py-2 text-sm font-semibold sm:text-primary-foreground focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
			: 'relative inline-flex items-center hidden sm:block px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0',
		isPage && 'cursor-pointer',
		!isPage && 'hover:bg-transparent text-muted-foreground'
	);

	const onHandleClick = (page: number | string) => {
		onClick && isPage && onClick(page as number);
	};

	return {
		onHandleClick,
		styleButton,
	};
};

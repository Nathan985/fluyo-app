import React from 'react';
import { Skeleton } from 'src/components/Skeleton';

import { IPaginationComponentType } from '../../types';
import PageController from './components/PageController';

const PaginationActions: React.FC<IPaginationComponentType> = ({
	totalPages = 0,
	onChangePage,
	isLoading = false,
	disabledPageParams,
}) => {
	return (
		<div>
			<nav
				aria-label='Pagination'
				className='isolate inline-flex -space-x-px rounded-md shadow-sm'
			>
				{isLoading ? (
					<Skeleton className='h-9 w-[358.53px]' />
				) : (
					<PageController
						count={totalPages}
						disabledPageParams={disabledPageParams}
						onChangePage={onChangePage}
					/>
				)}
			</nav>
		</div>
	);
};

export default PaginationActions;

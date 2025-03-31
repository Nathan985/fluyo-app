import React, { useContext } from 'react';
import { Skeleton } from 'src/components/Skeleton';
import { TableContext } from 'src/components/Table/context/TableContext';

import { IPaginationComponentType } from '../../types';

const PaginationInfo: React.FC<
	Pick<IPaginationComponentType, 'isLoading' | 'isLoadingData'>
> = ({ isLoading = false, isLoadingData }) => {
	const { rows } = useContext(TableContext);

	const rowsLenght = rows.length;

	return (
		<div>
			{isLoading || isLoadingData ? (
				<Skeleton className='h-9 w-[195.5px]' />
			) : (
				<p className='text-sm text-foreground'>
					Mostrando <span className='font-semibold'>{rowsLenght}</span> items
					por página
				</p>
			)}
		</div>
	);
};

export default PaginationInfo;

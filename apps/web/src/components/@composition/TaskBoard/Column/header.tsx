import { IHeaderColumnType } from '../@types/column.component.type';
import { BaseItemsType } from '../@types/base.component.type';

export const HeaderColumn = <T extends BaseItemsType>({
	title,
}: IHeaderColumnType<T>) => {
	return (
		<div className='h-fit w-full p-4 text-sm uppercase text-gray-400'>
			{title}
		</div>
	);
};

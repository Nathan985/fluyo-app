import { BookmarkIcon } from '@heroicons/react/20/solid';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { useCard } from './useCard';
import { ICardType } from '../@types/card.component.type';
import { BaseItemsType } from '../@types/base.component.type';

export const Card = <T extends BaseItemsType>(props: ICardType<T>) => {
	const { data } = props;
	const { attributes, listeners, setNodeRef, style } = useCard(props);

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className='flex h-40 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-md border border-gray-800 bg-gray-800 px-2 py-2 transition-all hover:border-gray-700 hover:opacity-80'
		>
			<div className='line-clamp-3 max-w-[87%]'>{data.id}</div>
			<div className='flex w-full justify-between'>
				<div className='flex w-fit items-center gap-2'>
					<div className='rounded-sm bg-green-700 p-1'>
						<BookmarkIcon className='h-3 w-3 fill-white' />
					</div>
					<div className='text-sm font-semibold text-gray-300'>BWF-1</div>
				</div>
				<div className='flex w-fit gap-2'>
					<Bars2Icon className='h-5 w-5 stroke-yellow-600 stroke-[3px]' />
					<div className='flex -space-x-1'>
						<img
							alt=''
							src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							className='inline-block size-5 rounded-full ring-2 ring-gray-900'
						/>
						<img
							alt=''
							src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							className='inline-block size-5 rounded-full ring-2 ring-gray-900'
						/>
						<img
							alt=''
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							className='inline-block size-5 rounded-full ring-2 ring-gray-900'
						/>
						<img
							alt=''
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							className='inline-block size-5 rounded-full ring-2 ring-gray-900'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

import { cn } from 'src/@shared/utils';

type ComboBoxSeeOptionsButtonProps<T> = {
	handleChangeOnSelectedView: () => void;
	selected: T[];
	show?: boolean;
};

export function ComboBoxSeeOptionsButton<T>({
	handleChangeOnSelectedView,
	selected,
	show,
}: ComboBoxSeeOptionsButtonProps<T>) {
	if (!show) return null;

	return (
		<div className='absolute right-1 top-0 -translate-y-[calc(100%)]'>
			<button
				disabled={selected.length === 0}
				onClick={handleChangeOnSelectedView}
				type='button'
				className={cn(
					'h-6 w-fit font-medium transition-all duration-300 ease-in-out',
					'bg-transparent p-0 text-xs text-gray-500 hover:bg-transparent hover:text-gray-700',
					selected.length > 0 && 'text-indigo-500 hover:text-indigo-700'
				)}
			>
				Ver selecionados
			</button>
		</div>
	);
}

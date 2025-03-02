import { IRootType } from '../@types/root.component.type';
import { BaseItemsType } from '../@types/base.component.type';
import { TaskBoardContextProvider } from '../context/taskBoardContext';
import TaskBoardSortableContext from './SotableContext';

export const Root = <T extends BaseItemsType>(props: IRootType<T>) => {
	const { children, data } = props;

	return (
		<TaskBoardContextProvider data={data}>
			<TaskBoardSortableContext>{children}</TaskBoardSortableContext>
		</TaskBoardContextProvider>
	);
};

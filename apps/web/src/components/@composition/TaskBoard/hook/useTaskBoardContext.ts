import { useContext } from 'react';
import { TaskBoardContext } from '../context/taskBoardContext';
import { BaseItemsType } from '../@types/base.component.type';
import { ITaskBoardContextType } from '../@types/taskboard.context.type';

export const useTaskBoardContext = <T extends BaseItemsType>() => {
	return useContext<ITaskBoardContextType<T>>(TaskBoardContext);
};

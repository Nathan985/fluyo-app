import { useTaskBoardContext } from '../hook/useTaskBoardContext';

export const useComponent = () => {
	const { columns, getColumnData } = useTaskBoardContext();

	return {
		columns,
		getColumnData,
	};
};

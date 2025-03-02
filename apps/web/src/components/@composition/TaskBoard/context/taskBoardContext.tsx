import { createContext, useCallback, useMemo, useState } from 'react';
import {
	ITaskBoardContextProviderType,
	ITaskBoardContextType,
} from '../@types/taskboard.context.type';
import { BaseItemsType } from '../@types/base.component.type';
import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';

export const TaskBoardContext = createContext({} as ITaskBoardContextType);

const defaultBoard = {
	'column 1': [],
};

export const TaskBoardContextProvider = <T extends BaseItemsType>(
	props: ITaskBoardContextProviderType<T>
) => {
	const { children, data } = props;
	const [columnsData, setColumnsData] = useState(data ?? defaultBoard);
	const [activeTask, setActiveTask] = useState<T>();

	const getColumns = (value: Record<string, T[]>) => {
		const columns = Object.keys(value);
		return columns;
	};

	const columns = useMemo(() => {
		return getColumns(columnsData);
	}, [columnsData]);

	const getColumnData = useCallback(
		(columnId: string) => {
			return columnId in columnsData ? columnsData[columnId] : [];
		},
		[columnsData]
	);

	const onDragStart = (event: DragStartEvent) => {
		setActiveTask(event.active.data);
	};

	const findColumn = (columnId: string) => {
		if (columnId in columnsData) {
			return columnId;
		}

		return Object.keys(columnsData).find(
			(key) => columnsData[key].find(({ id }) => id == columnId)!
		);
	};

	const onDragOver = (event: DragOverEvent) => {
		const { active, over } = event;
		const { id } = active;
		const { id: overId } = over!;

		// Find the containers
		const activeContainer = findColumn(id as string);
		const overContainer = findColumn(overId as string);

		if (
			!activeContainer ||
			!overContainer ||
			activeContainer === overContainer
		) {
			return;
		}

		setColumnsData((prev) => {
			const activeItems = prev[activeContainer];
			const overItems = prev[overContainer];

			// Find the indexes for the items
			const activeIndex = activeItems.findIndex(
				({ id: activeID }) => activeID == id
			);
			const overIndex = overItems.findIndex(({ id }) => overId == id);

			let newIndex;
			if (overId in prev) {
				// We're at the root droppable of a container
				newIndex = overItems.length + 1;
			} else {
				const isBelowLastItem = over && overIndex === overItems.length - 1;

				const modifier = isBelowLastItem ? 1 : 0;

				newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
			}

			return {
				...prev,
				[activeContainer]: [
					...prev[activeContainer].filter((item) => item.id !== active.id),
				],
				[overContainer]: [
					...prev[overContainer].slice(0, newIndex),
					columnsData[activeContainer][activeIndex],
					...prev[overContainer].slice(newIndex, prev[overContainer].length),
				],
			};
		});
	};

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over) return;

		const { id } = active;
		const { id: overId } = over!;

		// Encontra as colunas
		const activeContainer = findColumn(id as string);
		const overContainer = findColumn(overId as string);

		if (!activeContainer || !overContainer) return;

		// Se o item foi movido dentro da mesma coluna
		if (activeContainer === overContainer) {
			setColumnsData((prev) => {
				const columnItems = [...prev[activeContainer]];

				// Índices dos itens
				const oldIndex = columnItems.findIndex(({ id }) => id === active.id);
				const newIndex = columnItems.findIndex(({ id }) => id === overId);

				// Reordenar os itens na mesma coluna
				const [movedItem] = columnItems.splice(oldIndex, 1);
				columnItems.splice(newIndex, 0, movedItem);

				return {
					...prev,
					[activeContainer]: columnItems,
				};
			});
		} else {
			// Código para mover entre colunas (já existente)
			setColumnsData((prev) => {
				const activeItems = prev[activeContainer];
				const overItems = prev[overContainer];

				const activeIndex = activeItems.findIndex(
					({ id: activeID }) => activeID == id
				);
				const overIndex = overItems.findIndex(({ id }) => overId == id);

				let newIndex;
				if (overId in prev) {
					newIndex = overItems.length + 1;
				} else {
					const isBelowLastItem = over && overIndex === overItems.length - 1;
					const modifier = isBelowLastItem ? 1 : 0;
					newIndex =
						overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
				}

				return {
					...prev,
					[activeContainer]: [
						...prev[activeContainer].filter((item) => item.id !== active.id),
					],
					[overContainer]: [
						...prev[overContainer].slice(0, newIndex),
						columnsData[activeContainer][activeIndex],
						...prev[overContainer].slice(newIndex, prev[overContainer].length),
					],
				};
			});
		}
	};

	return (
		<TaskBoardContext.Provider
			value={{
				onDragEnd,
				columns,
				getColumnData,
				columnsData,
				onDragStart,
				activeTask,
				onDragOver,
			}}
		>
			{children}
		</TaskBoardContext.Provider>
	);
};

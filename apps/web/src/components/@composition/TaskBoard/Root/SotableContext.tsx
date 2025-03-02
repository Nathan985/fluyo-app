import React, { ReactNode } from 'react';
import { useTaskBoardContext } from '../hook/useTaskBoardContext';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { useRoot } from './useRoot';
import { Card } from '../Card';

const TaskBoardSortableContext: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { onDragEnd, onDragStart, activeTask, onDragOver } =
		useTaskBoardContext();
	const { sensors } = useRoot();

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={onDragEnd}
			onDragStart={onDragStart}
			onDragOver={onDragOver}
		>
			{children}
			<DragOverlay>
				{activeTask ? <Card data={activeTask} /> : null}
			</DragOverlay>
		</DndContext>
	);
};

export default TaskBoardSortableContext;

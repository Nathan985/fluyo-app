import { Root } from '../Root';
import { Column } from '../Column';
import { IComponentType, IRenderColmunType } from '../@types/component.type';
import { BaseItemsType } from '../@types/base.component.type';
import { useComponent } from './useComponent';
import { Card } from '../Card';
import React from 'react';

const RenderColumn = <T extends BaseItemsType>(props: IRenderColmunType<T>) => {
	const { columnId, data } = props;
	return (
		<Column key={columnId} title={columnId} data={data}>
			{data.map((cardData) => (
				<Card data={cardData} />
			))}
		</Column>
	);
};

const TaskBoard = () => {
	const { columns, getColumnData } = useComponent();

	return (
		<React.Fragment>
			{columns.map((columnId) => (
				<RenderColumn
					key={columnId}
					columnId={columnId}
					data={getColumnData(columnId)}
				/>
			))}
		</React.Fragment>
	);
};

export const Component = <T extends BaseItemsType>(
	props: IComponentType<T>
) => {
	return (
		<Root {...props}>
			<TaskBoard />
		</Root>
	);
};

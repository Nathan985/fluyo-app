import {
	AnimateLayoutChanges,
	defaultAnimateLayoutChanges,
	useSortable,
} from '@dnd-kit/sortable';
import { ICardType } from '../@types/card.component.type';
import { BaseItemsType } from '../@types/base.component.type';
import { CSS } from '@dnd-kit/utilities';

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
	defaultAnimateLayoutChanges({ ...args, wasDragging: true });

export const useCard = <T extends BaseItemsType>(props: ICardType<T>) => {
	const { data } = props;
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: data.id, animateLayoutChanges });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return {
		attributes,
		listeners,
		setNodeRef,
		style,
	};
};

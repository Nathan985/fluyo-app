import {
	DropdownItem,
	IActionsPageProps,
	IActionsPageReply,
} from './@types/action.base';

export const useActionsPage = <T>({
	actions,
	params,
}: IActionsPageProps<T>): IActionsPageReply => {
	const actionBuilded = actions.map((action) => action(params));

	const batchActions: Array<DropdownItem> = actionBuilded
		.filter(({ batchAction, shouldRender }) => batchAction && shouldRender)
		.map((action) => ({
			name: action.label,
			onClick: action.action,
			shouldRender: action.shouldRender,
		}));

	return {
		table: actionBuilded,
		batchActions,
	};
};

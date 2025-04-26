import { ComponentType } from 'react';

import { IImplementAction } from './implement.action.hook';

export type DropdownItem = {
	name?: string;
	href?: string;
	onClick?: () => void;
	shouldRender?: boolean;
};

export type IActionType = {
	label: string;
	icon?: React.ReactNode;
	action: () => void;
	shouldRender?: boolean;
	batchAction: boolean;
};

export type IBaseActionProps = {
	blockedPermissions?: [];
	action: () => void;
	icon: ComponentType<{ className?: string }>;
	label: string | (() => string);
	hidden?: boolean | (() => boolean);
	batchAction?: boolean;
};
export type IActionsPageReply = {
	table: Array<IActionType>;
	batchActions: Array<DropdownItem>;
};

export type IActionsPageProps<T = undefined> = {
	params: T;
	actions: Array<IImplementAction<T>>;
};

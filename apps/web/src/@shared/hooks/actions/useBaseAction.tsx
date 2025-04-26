import { useCallback } from 'react';

import { IActionType, IBaseActionProps } from './@types/action.base';

export const useBaseAction = (props: IBaseActionProps) => {
	const {
		blockedPermissions,
		action: execute,
		label,
		icon: Icon,
		hidden,
		batchAction = false,
	} = props;

	const checkHavePermission = useCallback(() => {
		return true;
	}, [blockedPermissions]);

	const buildLabel = useCallback(() => {
		if (typeof label === 'string') {
			return label;
		}

		return label();
	}, [label]);

	const buildIcon = useCallback(() => {
		if (!Icon) return undefined;

		return <Icon className='h-4 w-4 text-indigo-700' />;
	}, [Icon]);

	const shouldRendered = useCallback(() => {
		if (!hidden) return true;

		if (typeof hidden === 'boolean') return hidden;

		return !hidden();
	}, [hidden]);

	const consolidatedPermission = useCallback(() => {
		const hasPermission = checkHavePermission();
		const canRendered = shouldRendered();

		return hasPermission && canRendered;
	}, [shouldRendered, checkHavePermission]);

	const build = (): IActionType => {
		const action: IActionType = {
			action: execute,
			label: buildLabel(),
			icon: buildIcon(),
			shouldRender: consolidatedPermission(),
			batchAction,
		};

		return action;
	};

	return {
		build,
	};
};

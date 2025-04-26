import { useBaseAction } from 'src/@shared/hooks/actions/useBaseAction';
import { IProjectAction } from './@types/project.actions';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { useCallback } from 'react';

export const useInviteProjectAction: IProjectAction = ({
	selected,
	dispatchModal,
}) => {
	const execute = () => {
		dispatchModal('INVITE_PROJECT_MODAL', true);
	};

	const hidden = useCallback(() => {
		const { length } = selected;
		return length !== 1;
	}, [selected]);

	const { build } = useBaseAction({
		action: execute,
		icon: UserPlusIcon,
		label: 'Convidar Usuário',
		hidden,
		batchAction: true,
	});

	return build();
};

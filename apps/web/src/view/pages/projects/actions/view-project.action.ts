import { useBaseAction } from 'src/@shared/hooks/actions/useBaseAction';
import { IProjectAction } from './@types/project.actions';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useCallback } from 'react';

export const useViewProjectAction: IProjectAction = ({
	dispatchModal,
	selected,
}) => {
	const execute = () => {
		dispatchModal('VIEW_PROJECT_MODAL', true);
	};

	const hidden = useCallback(() => {
		const { length } = selected;
		return length !== 1;
	}, [selected]);

	const { build } = useBaseAction({
		action: execute,
		icon: EyeIcon,
		label: 'Visualizar Projeto',
		hidden,
		batchAction: true,
	});

	return build();
};

import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useActionsPage } from 'src/@shared/hooks/actions/useActionsPage';
import { IProjectEntity } from 'src/@shared/interfaces/entities/project.entity';
import ProjectService from 'src/@shared/services/ProjectService';
import { IActionParametes } from './actions/@types/project.actions';
import { useInviteProjectAction, useViewProjectAction } from './actions';
import { useProjectContext } from 'src/@shared/context/ProjectContext/hooks/useProjectContext';
import { useNavigate, useNavigation } from 'react-router-dom';

export const useProjects = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [selected, setSelected] = useState<Array<IProjectEntity>>([]);
	const { setProject } = useProjectContext();
	const navigate = useNavigate();
	const [modalState, setModalState] = useState<Record<string, boolean>>({
		VIEW_PROJECT_MODAL: false,
	});

	const projectsQuery = useQuery({
		queryKey: ['findMany-projects'],
		queryFn: ProjectService.getProjects,
	});

	const projects = useMemo(() => {
		const response = projectsQuery.data?.data ?? [];
		return response;
	}, [projectsQuery.data?.data]);

	const onChangeModal = (value?: boolean) => {
		setOpenModal((oldValue) => value ?? !oldValue);
	};

	const onHandleClickRow = (data: IProjectEntity) => {
		setProject(data);
		navigate('/backlog');
	};

	const dispatchModal = (type: string, value: boolean) => {
		setModalState((old) => ({
			...old,
			[type]: value,
		}));
	};

	const pageActions = useActionsPage<IActionParametes>({
		params: {
			selected,
			dispatchModal,
		},
		actions: [useViewProjectAction, useInviteProjectAction],
	});

	return {
		projects,
		onChangeModal,
		openModal,
		projectsQuery,
		pageActions,
		setSelected,
		modalState,
		dispatchModal,
		selected,
		onHandleClickRow,
	};
};

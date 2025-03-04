import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import ProjectService from 'src/@shared/services/ProjectService';

type Project = {
	uuid: string;
	name: string;
	description?: string;
	owner_uuid: string;
	owner: {
		uuid: string;
		name: string;
	};
	created_at: Date;
	upodated_at?: Date;
};

export const useProjects = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);

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

	return {
		projects,
		onChangeModal,
		openModal,
		projectsQuery,
	};
};

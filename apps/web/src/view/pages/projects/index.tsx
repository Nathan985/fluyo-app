import React from 'react';
import { useProjects } from './useProjects';
import { Table } from 'src/components/Table';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { SearchFormProject } from 'src/view/form/projects/SearchFormProject';
import { Modal } from 'src/components/Modal';
import { CreateProjectForm } from 'src/view/form/projects/CreateProjectForm';

export const ProjectsPage: React.FC = () => {
	const { projects, onChangeModal, openModal, projectsQuery } = useProjects();
	console.log(projects);
	return (
		<div className='flex h-full w-full flex-col overflow-hidden'>
			<SearchFormProject onChangeModal={onChangeModal} />
			<Table
				rows={projects}
				isSelectableLines
				columns={[
					{
						column: 'name',
						label: 'Nome',
					},
					{
						column: 'description',
						label: 'Descrição',
					},
					{
						column: 'owner',
						label: 'Líder',
						render: ({ owner }) => (
							<div className='flex items-center gap-4'>
								<img
									alt=''
									src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									className='size-8 rounded-full bg-gray-50'
								/>
								<span>{owner.name}</span>
							</div>
						),
					},
					{
						column: 'uuid',
						label: 'Ações',
						render: () => (
							<EllipsisHorizontalIcon className='h-4 w-4 fill-white' />
						),
					},
				]}
				isLoading={projectsQuery.isLoading}
			/>
			<Modal
				onClose={() => onChangeModal(false)}
				open={openModal}
				position='right'
			>
				<CreateProjectForm onChangeModal={onChangeModal} />
			</Modal>
		</div>
	);
};

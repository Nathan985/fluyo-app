import React from 'react';
import { useProjects } from './useProjects';
import { Table } from 'src/components/Table';
import { SearchFormProject } from 'src/view/form/projects/SearchFormProject';
import { Modal } from 'src/components/Modal';
import { CreateProjectForm } from 'src/view/form/projects/CreateProjectForm';
import { ContextMenu } from 'src/components/@composition/ContextMenu';
import InviteProject from './components/InviteProject';
import { ViewProjectForm } from 'src/view/form/projects/ViewProject';

export const ProjectsPage: React.FC = () => {
	const {
		projects,
		onChangeModal,
		openModal,
		projectsQuery,
		setSelected,
		pageActions,
		modalState,
		dispatchModal,
		selected,
		onHandleClickRow
	} = useProjects();

	return (
		<div className='flex h-full w-full flex-col overflow-hidden'>
			<SearchFormProject onChangeModal={onChangeModal} />
			<Table
				rows={projects}
				onSelectable={setSelected}
				onTableRowClick={onHandleClickRow}
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
						items: pageActions.batchActions,
						sharesColumn: true,
					},
				]}
				isLoading={projectsQuery.isLoading}
				rightClickContent={<ContextMenu.Content options={pageActions.table} />}
			/>
			<ViewProjectForm 
				data={selected?.[0]}
				open={modalState["VIEW_PROJECT_MODAL"]}
				onClose={() => dispatchModal('VIEW_PROJECT_MODAL', false)}
				title='Visualizar Projeto'
			/>
			<Modal
				onClose={() => onChangeModal(false)}
				open={openModal}
				position='right'
			>
				<CreateProjectForm onChangeModal={onChangeModal} />
			</Modal>
			<Modal
				onClose={() => dispatchModal('INVITE_PROJECT_MODAL', false)}
				open={modalState['INVITE_PROJECT_MODAL']}
				position='right'
				className='modal'
				classNameHeader='modal-header'
				containerClassName='modal-container'
			>
				<InviteProject project={selected[0]} />
			</Modal>
		</div>
	);
};

import React from 'react';
import { ViewLabelValue, ViewModal, ViewSectionContent, ViewSectionEmpty, ViewSectionTitle } from 'src/components/ViewModal';
import { IViewProjectFormType, IViewProjectSectionType } from './@types/view-project.type';
import { Badge } from 'src/components/Badge';
import { format } from 'date-fns'
import { Table } from 'src/components/Table';
import { IRole } from 'src/@shared/interfaces/entities/project.entity';


export const ViewProjectSection: React.FC<IViewProjectSectionType> = ({ data }) => {

  const RolePresenter: Record<IRole, string> = {
    ADMIN: "Administrador",
    MEMBER: "Membro"
  }

  if(!data) {
    return (
      <ViewSectionEmpty>
        <span>Nenhum dado encontrado</span>
      </ViewSectionEmpty>
    )
  }

  return (
		<section>
      <ViewSectionTitle>Dados do projeto</ViewSectionTitle>
      <ViewSectionContent className="grid-cols-2 sm:grid-cols-2">
      <ViewLabelValue label='Nome' value={data.name} />
      <ViewLabelValue label='Responsável' value={data.owner.name} />
      <ViewLabelValue label='Slug' value={<Badge label={data.slug} theme='default' />} />
      <ViewLabelValue label='Descição'  value={data.description} />
      <ViewLabelValue className='col-span-2' label='Criado em' value={format(data.createdAt, 'dd-MM-yyyy HH:mm')} />
      
      </ViewSectionContent>
      <ViewSectionTitle className='mt-4'>Membros do projeto</ViewSectionTitle>
      <ViewSectionContent className="grid-cols-2 gap-4 mt-2 sm:grid-cols-2">
        <div className='col-span-2 mt-4'>
        <Table
          rows={data.members}
          classNameHeader='bg-gray-800 text-red-500'
          classNameRow='bg-gray-700 hover:bg-gray-600'
          classNameBody='bg-red-500'
          columns={[
            {
              column: 'user',
              label: "Nome",
              render: ({ user }) => user?.name
            },
            {
              column: 'role',
              label: "Cargo", 
              render: ({ role }) => role in RolePresenter ? RolePresenter[role] : role
            }
          ]}
        />
        </div>
      </ViewSectionContent>
    </section>
  )
}

export const ViewProjectForm: React.FC<IViewProjectFormType> = ({ data, ...rest }) => {
  return (
    <ViewModal {...rest} >
      <ViewProjectSection data={data} />
    </ViewModal>
  )
}
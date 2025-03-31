import { TableCellsIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { EmptyStateRequest } from '../@composition/EmptyState/Request';

export const TableEmptyState: React.FC = () => {
	return (
		<React.Fragment>
			<EmptyStateRequest.Icon icon={TableCellsIcon} />
			<EmptyStateRequest.Title text='Não existem dados para visualização' />
			<EmptyStateRequest.Description text='Adicione dados para preencher esta tabela e aproveitar todas as funcionalidades disponíveis' />
		</React.Fragment>
	);
};

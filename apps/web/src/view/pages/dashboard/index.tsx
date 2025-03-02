import React from 'react';

import { TaskBoard } from 'src/components/@composition/TaskBoard';

export const DashboardPage: React.FC = () => {
	return (
		<div className='flex h-full max-h-full w-full max-w-full flex-col overflow-hidden rounded-lg'>
			<div className='h-16 min-h-16 w-full bg-gray-900 px-4 py-2'>
				<p className='text-xl font-semibold leading-6'>Minha Sprint</p>
				<p className='text-sm leading-6 text-gray-400'>Tarefas do projeto</p>
			</div>
			<div className='flex h-full max-h-[calc(100%-4rem)] w-full gap-2 rounded-b-lg border border-gray-700 p-6'>
				<TaskBoard
					data={{
						'Itemns pendentes': [{ id: 'Card Teste' }, { id: 'Card Teste 2' }],
						'Em andamento': [],
						Bloqueado: [{ id: 'Card Teste 3' }],
						Review: [],
						'Items Concluídos': [],
					}}
				/>
			</div>
		</div>
	);
};

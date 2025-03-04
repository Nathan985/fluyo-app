import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';

export const SearchFormProject: React.FC<{
	onChangeModal: (value?: boolean) => void;
}> = ({ onChangeModal }) => {
	return (
		<div className='my-2 flex items-center justify-between rounded-md bg-gray-900 px-6 py-3 shadow-md'>
			<div className='w-fit min-w-[250px]'>
				<Input
					label='Pesquisar Projetos'
					placeholder='busque pelo nome do projeto'
					icon={MagnifyingGlassIcon}
				/>
			</div>
			<div>
				<Button onClick={() => onChangeModal(true)}>Adicionar Projeto</Button>
			</div>
		</div>
	);
};

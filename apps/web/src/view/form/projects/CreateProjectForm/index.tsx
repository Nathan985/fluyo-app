import React from 'react';
import { ModalBody, ModalFooter, ModalFormContent } from 'src/components/Modal';
import { useCreateProjectForm } from './useCreateProjectForm';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { TextArea } from 'src/components/TextArea';

export type ICreateProjectFormParams = {
	onChangeModal: (value?: boolean) => void;
};

export const CreateProjectForm: React.FC<ICreateProjectFormParams> = (
	props
) => {
	const { errors, onHandleSubmit, register } = useCreateProjectForm(props);

	return (
		<ModalFormContent onSubmit={onHandleSubmit}>
			<ModalBody>
				<Input
					label='Nome do projeto'
					error={errors.name?.message}
					{...register('name')}
				/>
				<TextArea
					label='Descrição'
					error={errors.description?.message}
					{...register('description')}
				/>
			</ModalBody>
			<ModalFooter>
				<Button type='submit' className='w-fit'>
					Cadastrar Projeto
				</Button>
				<Button type='button' variant='outline' className='w-fit'>
					Cancelar
				</Button>
			</ModalFooter>
		</ModalFormContent>
	);
};

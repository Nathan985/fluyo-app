import React from 'react';
import { Controller } from 'react-hook-form';
import { Button } from 'src/components/Button';
import { Combobox } from 'src/components/Combobox';
import { Input } from 'src/components/Input';
import { ModalBody, ModalFooter, ModalFormContent } from 'src/components/Modal';
import { IInviteProjectParams, useInviteProject } from './useInviteProject';

const InviteProject: React.FC<IInviteProjectParams> = (params) => {
	const { register, control, errors, onHandleSubmit } =
		useInviteProject(params);

	return (
		<ModalFormContent onSubmit={onHandleSubmit}>
			<ModalBody>
				<Input
					label='E-mail'
					placeholder='example@gmail.com'
					{...register('email')}
					error={errors.email?.message}
				/>
				<Controller
					control={control}
					name='rule'
					defaultValue={{ label: 'Membro', value: 'MEMBER' }}
					render={({ field }) => (
						<Combobox
							label='Tipo'
							data={[
								{ label: 'Administrador', value: 'ADMIN' },
								{ label: 'Membro', value: 'MEMBER' },
							]}
							displayValueGetter={({ label }) => label}
							keyExtractor={({ value }) => value}
							value={field.value ? [field.value] : undefined}
							onChange={(value) => field.onChange(value[0])}
							type='single'
							error={errors.rule?.message}
						/>
					)}
				/>
			</ModalBody>
			<ModalFooter>
				<Button type='submit'>Convidar</Button>
				<Button variant={'outline'}>Cancelar</Button>
			</ModalFooter>
		</ModalFormContent>
	);
};

export default InviteProject;

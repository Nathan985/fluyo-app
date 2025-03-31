import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ProjectService from 'src/@shared/services/ProjectService';
import { z } from 'zod';
import { ICreateProjectFormParams } from '.';

const schema = z.object({
	name: z.string().min(1, 'Informe o nome do projeto'),
	description: z.string().optional(),
});

export type CreateProjectFormData = z.infer<typeof schema>;

export const useCreateProjectForm = (params: ICreateProjectFormParams) => {
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<CreateProjectFormData>({
		resolver: zodResolver(schema),
	});
	const { onChangeModal } = params;

	const queryClient = useQueryClient();

	const createProject = useMutation({
		mutationFn: ProjectService.createProject,
		onSuccess: () => {
			toast.success('Projeto foi criado com sucesso!');
			queryClient.invalidateQueries({
				queryKey: ['findMany-projects'],
			});
		},
		onError: () => {
			toast.error('Ocorreu um erro!');
		},
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		await createProject.mutateAsync(data);
		onChangeModal(false);
	});

	return {
		onHandleSubmit,
		errors,
		register,
	};
};

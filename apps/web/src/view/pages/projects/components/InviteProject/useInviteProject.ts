import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IProjectEntity } from 'src/@shared/interfaces/entities/project.entity';
import InviteService from 'src/@shared/services/InviteService';
import { z } from 'zod';

export type IInviteProjectParams = { project: IProjectEntity };

const schema = z.object({
	email: z.string().min(1, 'Informe o email a ser convidado').email(),
	rule: z.object(
		{
			label: z.string(),
			value: z.enum(['ADMIN', 'MEMBER']),
		},
		{
			required_error: 'Informe as permissões do usuario',
		}
	),
});

export type IInviteProjectFormData = z.infer<typeof schema>;

export const useInviteProject = (params: IInviteProjectParams) => {
	const { project } = params;
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm<IInviteProjectFormData>({
		resolver: zodResolver(schema),
	});

	const createInviteMutation = useMutation({
		mutationFn: InviteService.createInvite,
		onSuccess: () => {
			toast.success('Convite enviado com sucesso!', {
				className: 'border border-gray-800',
				style: {
					background: '#111827',
					color: '#d1d5db',
				},
			});
		},
		onError: () => {
			toast.error('Ocorreu um erro ao enviar o convite', {
				className: 'border border-gray-800',
				style: {
					background: '#111827',
					color: '#d1d5db',
				},
			});
		},
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		const response = await createInviteMutation.mutateAsync({
			email: data.email,
			role: data.rule.value,
			slug: project.slug,
		});
	});

	return {
		register,
		errors,
		control,
		onHandleSubmit,
	};
};

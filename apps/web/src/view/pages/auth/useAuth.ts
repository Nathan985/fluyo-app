import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import AuthService from 'src/@shared/services/AuthService';
import { toast } from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';

const schema = z.object({
	email: z.string().min(1, 'Informe o email de login').email('Email invalido'),
	password: z.string().min(1, 'Informe a senha de login'),
});

export type AuthFormData = z.infer<typeof schema>;

export const useAuth = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const authenticate = useMutation({
		mutationFn: AuthService.authenticate,
		onSuccess: () => {
			console.log('Success'), toast.success('Logado com sucesso!');
		},
		onError: () => toast.error('Ocorreu um erro'),
	});

	const navigate = useNavigate();

	const onHandleSubmit = handleSubmit(async (data) => {
		const response = await authenticate.mutateAsync(data);
		if (!response.isError) {
			return navigate('/');
		}
	});

	return {
		register,
		onHandleSubmit,
		errors,
		authenticate,
	};
};

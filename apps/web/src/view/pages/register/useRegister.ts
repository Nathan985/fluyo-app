import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthService from 'src/@shared/services/AuthService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { IErrorHandler } from 'src/@shared/interfaces/api/_errors/errorHandler';

const schema = z
	.object({
		name: z.string().min(1, 'Informe o seu nome para cadastro'),
		email: z
			.string()
			.min(1, 'Informe o email para cadastro')
			.email('Email invalido'),
		password: z.string().min(7, 'A senha deve conter 7 caracteres'),
		confirm_password: z.string().min(1, 'Confirme sua senha'),
	})
	.refine(
		({ confirm_password, password }) => {
			return confirm_password === password;
		},
		{
			message: 'Senhas diferentes',
			path: ['confirm_password'],
		}
	);

export type IRegisterFormDate = z.infer<typeof schema>;

export const useRegister = () => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
	} = useForm<IRegisterFormDate>({
		resolver: zodResolver(schema),
	});

	const navigate = useNavigate();

	const createAnAccount = useMutation({
		mutationFn: AuthService.createAnAccount,
		onSuccess: () => {
			toast.success('Conta criada com sucesso');
		},
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		try {
			const response = await createAnAccount.mutateAsync(data);
			if (!response.isError) {
				return navigate('/login');
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				const requestError: IErrorHandler = error.response?.data;
				const path = requestError.path ?? [];
				if (path.includes('email')) {
					setError('email', { message: requestError.message });
				}
			}
		}
	});

	return {
		errors,
		register,
		onHandleSubmit,
	};
};

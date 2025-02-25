import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
	.object({
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
	} = useForm<IRegisterFormDate>({
		resolver: zodResolver(schema),
	});

	const onHandleSubmit = handleSubmit((data) => {
		console.log({ data });
	});

	return {
		errors,
		register,
		onHandleSubmit,
	};
};

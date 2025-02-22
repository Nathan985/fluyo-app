import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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

	const onHandleSubmit = handleSubmit((data) => {});

	return {
		register,
		onHandleSubmit,
		errors,
	};
};

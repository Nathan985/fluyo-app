import React from 'react';
import { useRegister } from './useRegister';
import { Input } from 'src/components/Input';

const RegisterPage: React.FC = () => {
	const { errors, onHandleSubmit, register } = useRegister();

	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div className='flex flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img
						alt='Your Company'
						src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
						className='mx-auto h-10 w-auto'
					/>
					<h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
						Crie uma conta
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={onHandleSubmit} className='space-y-6'>
						<div>
							<Input
								id='email'
								label='E-mail'
								type='email'
								{...register('email')}
								error={errors.email?.message}
							/>
						</div>

						<div>
							<Input
								id='password'
								label='Senha'
								type='password'
								error={errors.password?.message}
								{...register('password')}
							/>
						</div>
						<div>
							<Input
								id='confirm_password'
								label='Confirme sua senha'
								type='password'
								{...register('confirm_password')}
								error={errors.confirm_password?.message}
							/>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Cadastrar
							</button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm/6 text-gray-500'>
						Já tem login?{' '}
						<a
							href='/login'
							className='font-semibold text-indigo-600 hover:text-indigo-500'
						>
							Logue-se aqui
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;

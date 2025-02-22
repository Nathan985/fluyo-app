import React from 'react';
import { useAuth } from './useAuth';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';

export const AuthPage: React.FC = () => {
	const { onHandleSubmit, register, errors, authenticate } = useAuth();

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
						Logue com sua conta
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

						<Button
							type='submit'
							className='flex w-full'
							isLoading={authenticate.isPending}
						>
							Login
						</Button>
					</form>

					<p className='mt-10 text-center text-sm/6 text-gray-500'>
						Ainda não tem registro?{' '}
						<a
							href='/register'
							className='font-semibold text-indigo-600 hover:text-indigo-500'
						>
							Cadastre-se aqui
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

import { compare } from 'bcryptjs';

import { BadRequestError } from '@/_errors/bad-request-error';
import { prisma } from '@/lib/prisma';

import { IUseCaseBase } from '../@types/usecase-base';
import { IAuthenticateWithPasswordUseCase } from './@dto';

export class AuthenticateWithPasswordUseCase
	implements
		IUseCaseBase<
			IAuthenticateWithPasswordUseCase.Input,
			IAuthenticateWithPasswordUseCase.Output
		>
{
	async execute(
		params: IAuthenticateWithPasswordUseCase.Input,
		_controller: IUseCaseBase.Execute.RequestController
	): Promise<IAuthenticateWithPasswordUseCase.Output> {
		const { email, password } = params;

		const userFromEmail = await prisma.user.findUnique({
			where: { email },
		});

		if (!userFromEmail) {
			throw new BadRequestError('Invalid credentials');
		}

		if (userFromEmail.passwordHash === null) {
			throw new BadRequestError('Invalid credentials');
		}

		const isPasswordValid = await compare(password, userFromEmail.passwordHash);

		if (!isPasswordValid) {
			throw new BadRequestError('Invalid credentials');
		}

		const token = await _controller.reply.jwtSign(
			{
				sub: userFromEmail.uuid,
			},
			{
				sign: {
					expiresIn: '7d',
				},
			}
		);

		return { token };
	}
}

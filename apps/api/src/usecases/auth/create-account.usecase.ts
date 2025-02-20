import { hash } from 'bcryptjs';

import { BadRequestError } from '@/_errors/bad-request-error';
import { prisma } from '@/lib/prisma';

import { IUseCaseBase } from '../@types/usecase-base';
import { ICreateAccountUseCase } from './@dto';

export class CreateAccountUsecase
	implements
		IUseCaseBase<ICreateAccountUseCase.Input, ICreateAccountUseCase.Output>
{
	async execute(
		params: ICreateAccountUseCase.Input
	): Promise<ICreateAccountUseCase.Output> {
		const { email, name, password } = params;

		const userWithSameEmail = await prisma.user.findUnique({
			where: { email },
		});

		if (userWithSameEmail) {
			throw new BadRequestError('Email already in use');
		}

		const passwordHash = await hash(password, 6);

		await prisma.user.create({
			data: {
				name,
				email,
				passwordHash,
			},
		});
	}
}

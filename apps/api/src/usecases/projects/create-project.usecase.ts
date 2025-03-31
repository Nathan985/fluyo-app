import { prisma } from '@/lib/prisma';
import { IUseCaseBase } from '../@types/usecase-base';
import { ICreateProjectUsecase } from './@dto';

export class CreateProjectUsecase
	implements
		IUseCaseBase<ICreateProjectUsecase.Input, ICreateProjectUsecase.Output>
{
	async execute(
		params: ICreateProjectUsecase.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<ICreateProjectUsecase.Output> {
		const { request } = controller;
		const { name, description } = params;

		const currentUserId = await request.getCurrentUserId();

		await prisma.project.create({
			data: {
				name,
				description,
				ownerId: currentUserId,
				members: {
					create: {
						userId: currentUserId,
						role: 'ADMIN',
					},
				},
			},
		});
	}
}

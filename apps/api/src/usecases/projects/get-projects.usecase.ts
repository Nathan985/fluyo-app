import { prisma } from '@/lib/prisma';
import { IUseCaseBase } from '../@types/usecase-base';
import { IGetProjectUsecase } from './@dto';

export class GetProjectsUseCase
	implements IUseCaseBase<IGetProjectUsecase.Input, IGetProjectUsecase.Output>
{
	async execute(
		params: IGetProjectUsecase.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IGetProjectUsecase.Output> {
		const { getCurrentUserId } = controller.request;
		const currentUserId = await getCurrentUserId();

		const response = await prisma.project.findMany({
			select: {
				name: true,
				createdAt: true,
				description: true,
				updatedAt: true,
				uuid: true,
				owner: {
					select: {
						uuid: true,
						name: true,
						email: true,
						avatarUrl: true,
					},
				},
				members: {
					select: {
						project: false,
						projectId: false,
						userId: false,
						uuid: false,
						role: true,
						user: {
							select: {
								uuid: true,
								name: true,
								email: true,
								avatarUrl: true,
							},
						},
					},
				},
			},
			where: {
				members: {
					some: {
						userId: currentUserId,
					},
				},
			},
		});

		return response;
	}
}

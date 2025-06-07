import { prisma } from '@/lib/prisma';
import { IUseCaseBase } from '../@types/usecase-base';
import { IGetInvitesUsecase } from './@dto';
import { BadRequestError } from '@/_errors/bad-request-error';
import { boolean } from 'zod';

export class GetInvitesUsecase
	implements IUseCaseBase<IGetInvitesUsecase.Input, IGetInvitesUsecase.Output>
{
	async execute(
		_params: void,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IGetInvitesUsecase.Output> {
		const { getCurrentUserId } = controller.request;
		const currentUserId = await getCurrentUserId();

		const response = await prisma.user.findUnique({
			where: { uuid: currentUserId },
			select: { uuid: true, email: true, name: true },
		});

		if (!response) {
			throw new BadRequestError('User not found!');
		}

		const invites = await prisma.invite.findMany({
			where: {
				email: { equals: response.email },
			},
			select: {
				author: {
					select: {
						name: true,
						email: true,
					},
				},
				authorId: true,
				createdAt: true,
				email: true,
				project: {
					select: {
						uuid: true,
						name: true,
						slug: true,
					},
				},
				projectId: true,
				role: true,
				uuid: true,
			},
		});

		return invites;
	}
}

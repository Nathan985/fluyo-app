import { prisma } from '@/lib/prisma';
import { IUseCaseBase } from '../@types/usecase-base';
import { IManageInviteUsecase } from './@dto';
import { BadRequestError } from '@/_errors/bad-request-error';

export class ManageInviteUsecase
	implements
		IUseCaseBase<IManageInviteUsecase.Input, IManageInviteUsecase.Output>
{
	async execute(
		params: IManageInviteUsecase.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<void> {
		const user_uuid = await controller.request.getCurrentUserId();
		const { invite_uuid, status } = params;

		const invite = await prisma.invite.findFirst({
			where: { uuid: invite_uuid },
		});

		if (!invite) {
			throw new BadRequestError('Invite not found!');
		}

		if (status === 'accept') {
			await prisma.$transaction([
				prisma.projectMember.create({
					data: {
						projectId: invite.projectId,
						userId: user_uuid,
						role: invite.role,
					},
				}),
				prisma.invite.delete({ where: { uuid: invite.uuid } }),
			]);
			return;
		}

		if (status === 'decline') {
			await prisma.invite.delete({ where: { uuid: invite.uuid } });
		}
	}
}

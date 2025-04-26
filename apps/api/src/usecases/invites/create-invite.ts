import { getuserPermissions } from '@/utils/get-user-permissions';
import { IUseCaseBase } from '../@types/usecase-base';
import { ICreateInviteUsecase } from './@dto';
import { UnauthorizedError } from '@/_errors/unauthorized-error';
import { prisma } from '@/lib/prisma';
import { BadRequestError } from '@/_errors/bad-request-error';
export class CreateInviteUsecase
	implements
		IUseCaseBase<ICreateInviteUsecase.Input, ICreateInviteUsecase.Output>
{
	async execute(
		params: ICreateInviteUsecase.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<ICreateInviteUsecase.Output> {
		const { email, role, slug } = params;
		const { request } = controller;

		const userId = await request.getCurrentUserId();
		const { membership, project } = await request.getUserMemeberShip(slug);
		console.log({ userId, membership, project });
		const { cannot } = getuserPermissions(userId, membership.role);

		if (cannot('create', 'Invite')) {
			throw new UnauthorizedError(
				'You do not have permission to create an invite'
			);
		}

		const inviteWithSameEmail = await prisma.invite.findUnique({
			where: {
				email_projectId: {
					email,
					projectId: project.uuid,
				},
			},
		});

		if (inviteWithSameEmail) {
			throw new BadRequestError({
				message: 'An invite with this email already exists',
				path: ['email'],
			});
		}

		const invite = await prisma.invite.create({
			data: {
				projectId: project.uuid,
				email,
				authorId: userId,
				role,
			},
		});

		return { inviteId: invite.uuid };
	}
}

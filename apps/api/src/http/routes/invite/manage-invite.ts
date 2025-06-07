import { InviteController } from '@/controller/invite/invite.controller';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { ManageInvite } from './@dto';

export async function manageInvite(
	app: FastifyInstance,
	controller: InviteController
) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/invite',
		{
			schema: {
				tags: ['invites'],
				summary: 'accept or decline project invite',
				security: [{ bearerAuth: [] }],
				body: ManageInvite.input,
				response: {
					201: ManageInvite.output,
				},
			},
		},
		controller.manageInvite
	);
}

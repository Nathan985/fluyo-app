import { InviteController } from '@/controller/invite/invite.controller';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { GetInvites } from './@dto';

export async function getInvites(
	app: FastifyInstance,
	controller: InviteController
) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/invite',
		{
			schema: {
				tags: ['invites'],
				summary: 'get user invites',
				security: [{ bearerAuth: [] }],
				response: {
					200: GetInvites.output,
				},
			},
		},
		controller.getInvites
	);
}

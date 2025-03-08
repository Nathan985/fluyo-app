import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { CreateInvite } from './@dto';
import { InviteController } from '@/controller/invite/invite.controller';

export async function createInvite(
	app: FastifyInstance,
	controller: InviteController
) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/invite/:slug',
		{
			schema: {
				tags: ['invites'],
				summary: 'create a new invite',
				security: [{ bearerAuth: [] }],
				body: CreateInvite.input,
				params: CreateInvite.params,
				response: {
					201: CreateInvite.output,
				},
			},
		},
		controller.createInvite
	);
}

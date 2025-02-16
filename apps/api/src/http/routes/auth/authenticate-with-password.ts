import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { AuthController } from '@/controller/auth/auth.controller';

import { input, output } from './@dto/authenticate-with-password';

export async function authenticateWithPassword(
	app: FastifyInstance,
	controller: AuthController
) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/sessions/password',
		{
			schema: {
				tags: ['auth'],
				summary: 'Authenticate with e-mail & password',
				body: input,
				response: {
					201: output,
				},
			},
		},
		controller.authenticateWithPassword
	);
}

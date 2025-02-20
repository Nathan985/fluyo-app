import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { AuthController } from '@/controller/auth/auth.controller';

import { CreateAccount } from './@dto';

export async function createAccount(
	app: FastifyInstance,
	controller: AuthController
) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/users',
		{
			schema: {
				tags: ['auth'],
				summary: 'Create a new account',
				body: CreateAccount.input,
				response: {
					201: CreateAccount.output,
				},
			},
		},
		controller.createAccount
	);
}

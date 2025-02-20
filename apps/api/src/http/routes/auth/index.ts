import { FastifyInstance } from 'fastify';

import { AuthController } from '@/controller/auth/auth.controller';
import { AuthFacade } from '@/usecases/auth/@facade/auth.facade';

import { authenticateWithPassword } from './authenticate-with-password';
import { createAccount } from './create-account';

export function getAuthRoutes(app: FastifyInstance, props: AuthFacade) {
	const controller = new AuthController({ facade: props });

	authenticateWithPassword(app, controller);
	createAccount(app, controller);
}

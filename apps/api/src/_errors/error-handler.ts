import { FastifyInstance } from 'fastify';
import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod';

import { BadRequestError } from './bad-request-error';
import { UnauthorizedError } from './unauthorized-error';

type FastifyErrorHandler = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
	if (hasZodFastifySchemaValidationErrors(error)) {
		return reply.status(400).send({
			message: 'Validation error',
			errors: error.validation,
		});
	}

	if (error instanceof BadRequestError) {
		const customError: BadRequestError = error;
		return reply.status(400).send({
			message: customError.message,
			path: customError.path,
		});
	}

	if (error instanceof UnauthorizedError) {
		return reply.status(401).send({
			message: error.message,
		});
	}

	console.error(error);

	return reply.status(500).send({
		message: 'Internal server error',
	});
};

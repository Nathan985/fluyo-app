import FastifyJwt from '@fastify/jwt';
import { env } from '@fluyo/env';
import { FastifyInstance } from 'fastify';

export async function jwtConfig(app: FastifyInstance) {
	app.register(FastifyJwt, {
		secret: env.JWT_SECRET,
	});
}

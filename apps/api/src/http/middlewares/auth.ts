import { FastifyInstance } from 'fastify';
import { fastifyPlugin } from 'fastify-plugin';

import { prisma } from '@/lib/prisma';

import { UnauthorizedError } from '@/_errors/unauthorized-error';

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
	app.addHook('preHandler', async (request) => {
		request.getCurrentUserId = async () => {
			try {
				const { sub } = await request.jwtVerify<{ sub: string }>();

				return sub;
			} catch {
				throw new UnauthorizedError('Invalid auth token');
			}
		};

		request.getUserMemeberShip = async (slug: string) => {
			const userId = await request.getCurrentUserId();

			const member = await prisma.projectMember.findFirst({
				where: {
					userId,
					project: {
						slug,
					},
				},
				include: {
					project: true,
				},
			});

			if (!member) {
				throw new UnauthorizedError('You are not a member of this team');
			}

			const { project, ...membership } = member;

			return {
				project,
				membership,
			};
		};
	});
});

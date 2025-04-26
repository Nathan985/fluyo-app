import { Project, ProjectMember } from '@prisma/client';
import 'fastify';

declare module 'fastify' {
	interface FastifyRequest {
		getCurrentUserId(): Promise<string>;
		getUserMemeberShip(
			slug: string
		): Promise<{ project: Project; membership: ProjectMember }>;
	}
}

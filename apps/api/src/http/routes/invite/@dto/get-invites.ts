import { z } from 'zod';
import { members, user } from '../../projects/@dto/get-projects';

export const output = z.array(
	z.object({
		uuid: z.string(),
		author: z.object({
			name: z.string(),
			email: z.string(),
		}),
		project: z.object({
			uuid: z.string(),
			name: z.string(),
			slug: z.string(),
		}),
		email: z.string(),
		role: z.enum(['ADMIN', 'MEMBER']),
		createdAt: z.date(),
		authorId: z.string().nullable(),
		projectId: z.string(),
	})
);

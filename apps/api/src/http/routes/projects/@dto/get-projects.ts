import { z } from 'zod';

export const input = z.void();

export const user = z.object({
	name: z.string().nullable().optional(),
	uuid: z.string(),
	email: z.string(),
	avatarUrl: z.string().nullable().optional(),
});

export const members = z.object({
	role: z.enum(['ADMIN', 'MEMBER']),
	user,
});

export const output = z.array(
	z.object({
		uuid: z.string(),
		name: z.string(),
		slug: z.string(),
		description: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date().optional(),
		owner: user,
		members: z.array(members),
	})
);

import { z } from 'zod';

export const input = z.object({
	email: z.string().email(),
	role: z.enum(['ADMIN', 'MEMBER']),
});

export const params = z.object({
	slug: z.string(),
});

export const output = z.object({
	inviteId: z.string(),
});

import { z } from 'zod';

export const input = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export const output = z.object({
	message: z.string(),
});

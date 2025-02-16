import { z } from 'zod';

export const input = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const output = z.object({
	token: z.string(),
});

import { z } from 'zod';

export const input = z.object({
	name: z.string().min(1, 'Informe o nome do projeto'),
	description: z.string().optional(),
});

export const output = z.void();

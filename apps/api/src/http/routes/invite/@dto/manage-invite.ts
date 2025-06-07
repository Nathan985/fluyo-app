import z from 'zod';

export const input = z.object({
	status: z.enum(['accept', 'decline']),
	invite_uuid: z.string(),
});

export const output = z.void();

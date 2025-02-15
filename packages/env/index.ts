import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		SERVER_PORT: z.coerce.number().default(3333),
	},
	client: {},
	shared: {},
	runtimeEnv: {
		SERVER_PORT: process.env.SERVER_PORT,
	},
	emptyStringAsUndefined: true,
});

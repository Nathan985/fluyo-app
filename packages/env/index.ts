import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		PORT: z.coerce.number().default(3333),
		JWT_SECRET: z.string(),
	},
	client: {},
	shared: {},
	runtimeEnv: {
		PORT: process.env.PORT,
		JWT_SECRET: process.env.JWT_SECRET,
	},
	emptyStringAsUndefined: true,
});

import FastifyCors from '@fastify/cors';
import FastifySwagger from '@fastify/swagger';
import FastifySwaggerUi from '@fastify/swagger-ui';
import { env } from '@fluyo/env';
import Fastify from 'fastify';
import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
	ZodTypeProvider,
} from 'fastify-type-provider-zod';

import { errorHandler } from '@/_errors/error-handler';

import { jwtConfig } from './jwt';
import { buildRoutes } from './routes';

const app = Fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.setErrorHandler(errorHandler);

app.register(FastifySwagger, {
	openapi: {
		info: {
			title: 'Fluyo SaaS',
			description: 'Full-stack SaaS app with muli-tenant & RBAC',
			version: '1.0.0',
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
	},
	transform: jsonSchemaTransform,
});

app.register(FastifySwaggerUi, {
	routePrefix: '/docs',
});

app.register(FastifyCors);

app.register(jwtConfig);

app.register(buildRoutes);

app.listen({ port: env.SERVER_PORT }).then(() => {
	console.log(`Server listening on port ${env.SERVER_PORT}`);
});

import { env } from '@fluyo/env';
import Fastify from 'fastify';
import {
	serializerCompiler,
	validatorCompiler,
	ZodTypeProvider,
} from 'fastify-type-provider-zod';

const app = Fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: env.SERVER_PORT }).then(() => {
	console.log(`Server listening on port ${env.SERVER_PORT}`);
});

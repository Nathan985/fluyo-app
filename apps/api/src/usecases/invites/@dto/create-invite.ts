import { Role } from '@prisma/client';

export type Input = {
	slug: string;
	email: string;
	role: Role;
};

export type Output = {
	inviteId: string;
};

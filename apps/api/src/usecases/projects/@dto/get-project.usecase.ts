export type Input = void;

export type Output = Array<{
	uuid: string;
	name: string;
	description?: string | null;
	createdAt: Date;
	updatedAt: Date;
	owner: {
		name?: string | null;
		uuid: string;
		email: string;
		avatarUrl?: string | null;
	};
	members: Array<{
		role: 'ADMIN' | 'MEMBER';
		user: {
			uuid: string;
			name?: string | null;
			email: string;
			avatarUrl?: string | null;
		};
	}>;
}>;

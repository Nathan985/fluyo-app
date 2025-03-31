export type IUserEntity = {
	uuid: string;
	name: string;
	email: string;
	avatarUrl?: string;
	createdAt: Date;
	updatedAt?: Date;
};

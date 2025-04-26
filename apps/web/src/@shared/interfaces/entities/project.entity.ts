import { IUserEntity } from './user.entity';

export type IProjectEntity = {
	uuid: string;
	name: string;
	slug: string;
	description?: string;
	ownerId: string;
	owner: IUserEntity;
	members: Array<IProjectMemberEntity>;
	createdAt: Date;
	updatedAt?: Date;
};

export type IRole = 'ADMIN' | 'MEMBER';

export type IProjectMemberEntity = {
	uuid: string;
	projectId: string;
	role: IRole;
	userId: string;
	project?: IProjectEntity;
	user?: IUserEntity;
};

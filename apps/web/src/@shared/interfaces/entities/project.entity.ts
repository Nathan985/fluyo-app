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

export type IProjectMemberEntity = {
	uuid: string;
	projectId: string;
	role: 'ADMIN' | 'MEMBER';
	userId: string;
	project?: IProjectEntity;
	user?: IUserEntity;
};

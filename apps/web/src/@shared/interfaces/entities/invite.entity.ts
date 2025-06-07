import { IProjectEntity, IRole } from './project.entity';
import { IUserEntity } from './user.entity';

export type IInviteEntity = {
	uuid: string;
	author?: IAuthor;
	project: IProject;
	email: string;
	role: IRole;
	createdAt: Date;
	authorId?: string;
	projectId: string;
};

export type IAuthor = Pick<IUserEntity, 'name' | 'email'>;
export type IProject = Pick<IProjectEntity, 'uuid' | 'name' | 'slug'>;

import { IProjectEntity } from 'src/@shared/interfaces/entities/project.entity';

export type IProjectContext = {
	currentProject: IProjectEntity | undefined;
	setProject: (data?: IProjectEntity) => void;
};

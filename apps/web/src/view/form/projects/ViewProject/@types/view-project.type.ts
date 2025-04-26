import { IProjectEntity } from 'src/@shared/interfaces/entities/project.entity';
import { ViewModalProps } from 'src/components/ViewModal';

export type IViewProjectSectionType = {
	data?: IProjectEntity;
};

export type IViewProjectFormType = IViewProjectSectionType & ViewModalProps;

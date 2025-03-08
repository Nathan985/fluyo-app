import { IImplementAction } from 'src/@shared/hooks/actions/@types/implement.action.hook';
import { IProjectEntity } from 'src/@shared/interfaces/entities/project.entity';

export type IActionParametes = {
	selected: Array<IProjectEntity>;
	dispatchModal: (type: string, payload: boolean) => void;
};
export type IProjectAction = IImplementAction<IActionParametes>;

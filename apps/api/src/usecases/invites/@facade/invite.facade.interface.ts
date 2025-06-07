import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import {
	ICreateInviteUsecase,
	IGetInvitesUsecase,
	IManageInviteUsecase,
} from '../@dto';
import { CreateInviteUsecase } from '../create-invite';
import { ManageInviteUsecase } from '../manage-invite';
import { GetInvitesUsecase } from '../get-invites';

export interface IInviteFacade {
	createInvite: (
		params: IInviteFacade.CreateInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IInviteFacade.CreateInvite.Output>;
	getInvites: (
		params: IInviteFacade.GetInvites.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IInviteFacade.GetInvites.Output>;
	manageInvite: (
		params: IInviteFacade.ManageInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IInviteFacade.ManageInvite.Output>;
}

export namespace IInviteFacade {
	export type IConstructor = {
		createInvite: CreateInviteUsecase;
		getInvites: GetInvitesUsecase;
		manageInvite: ManageInviteUsecase;
	};

	export namespace CreateInvite {
		export type Input = ICreateInviteUsecase.Input;
		export type Output = ICreateInviteUsecase.Output;
	}
	export namespace GetInvites {
		export type Input = IGetInvitesUsecase.Input;
		export type Output = IGetInvitesUsecase.Output;
	}
	export namespace ManageInvite {
		export type Input = IManageInviteUsecase.Input;
		export type Output = IManageInviteUsecase.Output;
	}
}

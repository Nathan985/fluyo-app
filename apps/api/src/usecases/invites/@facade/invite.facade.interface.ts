import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import { ICreateInviteUsecase } from '../@dto';
import { CreateInviteUsecase } from '../create-invite';

export interface IInviteFacade {
	createInvite: (
		params: IInviteFacade.CreateInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	) => Promise<IInviteFacade.CreateInvite.Output>;
}

export namespace IInviteFacade {
	export type IConstructor = {
		createInvite: CreateInviteUsecase;
	};

	export namespace CreateInvite {
		export type Input = ICreateInviteUsecase.Input;
		export type Output = ICreateInviteUsecase.Output;
	}
}

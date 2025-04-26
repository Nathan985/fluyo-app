import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import { CreateInviteUsecase } from '../create-invite';
import { IInviteFacade } from './invite.facade.interface';

export class InviteFacade implements IInviteFacade {
	private _createInvite: CreateInviteUsecase;

	constructor(params: IInviteFacade.IConstructor) {
		this._createInvite = params.createInvite;
	}

	async createInvite(
		params: IInviteFacade.CreateInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IInviteFacade.CreateInvite.Output> {
		return await this._createInvite.execute(params, controller);
	}
}

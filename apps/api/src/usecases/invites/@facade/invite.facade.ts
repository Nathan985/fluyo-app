import { IUseCaseBase } from '@/usecases/@types/usecase-base';
import { CreateInviteUsecase } from '../create-invite';
import { IInviteFacade } from './invite.facade.interface';
import { GetInvitesUsecase } from '../get-invites';
import { ManageInviteUsecase } from '../manage-invite';

export class InviteFacade implements IInviteFacade {
	private _createInvite: CreateInviteUsecase;
	private _getInvites: GetInvitesUsecase;
	private _manageInvites: ManageInviteUsecase;

	constructor(params: IInviteFacade.IConstructor) {
		this._createInvite = params.createInvite;
		this._getInvites = params.getInvites;
		this._manageInvites = params.manageInvite;
	}

	async createInvite(
		params: IInviteFacade.CreateInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IInviteFacade.CreateInvite.Output> {
		return await this._createInvite.execute(params, controller);
	}

	async getInvites(
		params: IInviteFacade.GetInvites.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IInviteFacade.GetInvites.Output> {
		return await this._getInvites.execute(params, controller);
	}

	async manageInvite(
		params: IInviteFacade.ManageInvite.Input,
		controller: IUseCaseBase.Execute.RequestController
	): Promise<IInviteFacade.ManageInvite.Output> {
		return await this._manageInvites.execute(params, controller);
	}
}

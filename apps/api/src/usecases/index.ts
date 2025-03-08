import { AuthFacade } from './auth/@facade/auth.facade';
import { AuthFacadeFactory } from './auth/@factory/auth.facade.factory';
import { InviteFacade } from './invites/@facade/invite.facade';
import { InviteFacadeFactory } from './invites/@factory/invite.facade.factory';
import { ProjectFacade } from './projects/@facade/projects.facade';
import { ProjectFacadeFactory } from './projects/@factory/project.facade.factory';

export type IGetFacades = {
	auth: AuthFacade;
	project: ProjectFacade;
	invite: InviteFacade;
};

export function getFacades(): IGetFacades {
	const auth = AuthFacadeFactory.create();
	const project = ProjectFacadeFactory.create();
	const invite = InviteFacadeFactory.create();

	return {
		auth,
		project,
		invite,
	};
}

import { AuthFacade } from './auth/@facade/auth.facade';
import { AuthFacadeFactory } from './auth/@factory/auth.facade.factory';
import { ProjectFacade } from './projects/@facade/projects.facade';
import { ProjectFacadeFactory } from './projects/@factory/project.facade.factory';

export type IGetFacades = {
	auth: AuthFacade;
	project: ProjectFacade;
};

export function getFacades(): IGetFacades {
	const auth = AuthFacadeFactory.create();
	const project = ProjectFacadeFactory.create();

	return {
		auth,
		project,
	};
}

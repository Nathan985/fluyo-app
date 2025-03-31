import { ProjectFacade } from '@/usecases/projects/@facade/projects.facade';

export namespace IprojectController {
	export type IConstructor = {
		facade: ProjectFacade;
	};
}

import { AbilityBuilder } from '@casl/ability';

import { AppAbility } from './index';
import { User } from './models/user';
import { Role } from './roles';

type PermissionByRole = (
	user: User,
	builder: AbilityBuilder<AppAbility>
) => void;

export const permissions: Record<Role, PermissionByRole> = {
	ADMIN: (user, { can, cannot }) => {
		can('manage', 'all');

		cannot(['delete'], 'Project');
		can(['delete'], 'Project', {
			ownerId: { $eq: user.uuid },
		});
	},
	MEMBER: (user, { can }) => {
		can('get', 'User');
		can(['create', 'get'], 'Project');
		can(['update', 'delete'], 'Project', { ownerId: { $eq: user.uuid } });
	},
};

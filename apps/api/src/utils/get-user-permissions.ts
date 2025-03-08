import { defineAbilityFor, Role, userSchema } from '@fluyo/auth';

export function getuserPermissions(userId: string, role: Role) {
	const authUser = userSchema.parse({
		uuid: userId,
		role,
	});

	const ability = defineAbilityFor(authUser);

	return ability;
}

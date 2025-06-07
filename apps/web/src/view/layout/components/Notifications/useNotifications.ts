import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import InviteService from 'src/@shared/services/InviteService';

export const useNotifications = () => {
	const invitesQuery = useQuery({
		queryKey: ['get-invites'],
		queryFn: () => InviteService.getInvites(),
	});

	const inviteData = useMemo(
		() => invitesQuery.data?.data ?? [],
		[invitesQuery.data?.data]
	);

	return {
		inviteData,
	};
};

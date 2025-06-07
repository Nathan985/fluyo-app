import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { IInviteEntity } from 'src/@shared/interfaces/entities/invite.entity';
import { IInviteService } from 'src/@shared/interfaces/services/InviteService';
import InviteService from 'src/@shared/services/InviteService';

export type IAction = 'accept' | 'decline';

export const useInvite = (data: IInviteEntity) => {
	const queryClient = useQueryClient();

	const manageInviteMutation = useMutation({
		mutationKey: ['manage-invite'],
		mutationFn: (props: IInviteService.ManageInvite.Params) =>
			InviteService.manageInvite(props),
		onSuccess: async (_, params) => {
			toast.success(
				`Convite ${params.status === 'accept' ? 'Aceito' : 'Recusado'} com sucesso!`
			);
			await queryClient.invalidateQueries({
				queryKey: ['get-invites'],
			});
		},
	});

	const onHandleAction = async (action: IAction) => {
		await manageInviteMutation.mutateAsync({
			status: action,
			invite_uuid: data.uuid,
		});
	};

	return {
		onHandleAction,
	};
};

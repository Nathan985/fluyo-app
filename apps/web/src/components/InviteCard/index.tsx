import React from 'react';
import { Wrapper } from './Wrapper';
import { Icon } from './Icon';
import { Body } from './Body';
import { subDays } from 'date-fns';
import { useInvite } from './useInvite';
import { IInviteEntity } from 'src/@shared/interfaces/entities/invite.entity';

export const InviteCard: React.FC<{ data: IInviteEntity }> = ({ data }) => {

  const { onHandleAction } = useInvite(data);

  return (
    <Wrapper>
      <Icon />
      <Body 
        title='Convite de projeto'
        author={{
          name: data.author?.name ?? ""
        }}
        project={{
          name: data.project?.name ?? ""
        }}
        createdAt={data.createdAt}
        onHandleAction={onHandleAction}
      />
    </Wrapper>
  )
}

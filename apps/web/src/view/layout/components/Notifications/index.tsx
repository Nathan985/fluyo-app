import React, { useMemo } from 'react';
import { Popover,  PopoverContent, PopoverTrigger } from 'src/components/@composition/Popover';
import { Trigger } from './trigger';
import { InviteCard } from 'src/components/InviteCard';
import { subDays } from 'date-fns';
import { useNotifications } from './useNotifications';
import { EmptyStateRequest } from 'src/components/@composition/EmptyState/Request';
import { BellIcon } from '@heroicons/react/24/outline';


export const Notifications: React.FC = () => {

  const { inviteData } = useNotifications();

  const countNotifications = useMemo(() => {
    const { length } = inviteData;

    return length
  }, [inviteData])


  return (
    <div>
      <Popover>
			<PopoverTrigger >
				<Trigger  notificationCount={countNotifications} />
			</PopoverTrigger>

			<PopoverContent className="flex flex-col overflow-y-auto app-scrollbar-nested app-se max-h-[75vh]  border-gray-950 gap-4 shadow-md mr-20  p-4">
        {
          inviteData.map((invite) => (
            <InviteCard 
              data={invite}
            />
          ))
        }
        {
          countNotifications <= 0 && (
            <div className='w-full h-full'>
              <EmptyStateRequest.Root className="z-20 w-[420px] h-72 overflow-hidden backdrop-blur">
                <EmptyStateRequest.Icon icon={BellIcon} />
                <EmptyStateRequest.Title className='text-white' text="Notificações" />
                <EmptyStateRequest.Description text="Nenhuma notificação encontrada" />
              </EmptyStateRequest.Root>
            </div>
          )
        }
        
			</PopoverContent>
		</Popover>
    </div>
  )
}

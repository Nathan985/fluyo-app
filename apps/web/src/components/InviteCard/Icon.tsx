import { UsersIcon } from '@heroicons/react/24/outline';
import React, { ComponentType } from 'react';

export type IconProps = {
  Icon?: ComponentType
}

export const Icon: React.FC<IconProps> = ({ Icon = UsersIcon }) => {
  return (
    <div className='h-full p-2'>
      <div className='flex justify-center items-center w-8 h-8 bg-blue-200 rounded-full aspect-square'>
        <Icon className="w-5 h-5 stroke-blue-900" />
      </div>
    </div>
  )
}
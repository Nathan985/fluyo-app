import React from 'react';
import { IProjectViewType } from './@types/project-view.types';

export const ProjectView: React.FC<IProjectViewType> = ({ data }) => {

  console.log({ data })

  if(!data) {
    return
  }

  return (
    <div className='flex flex-col my-2 p-2 bg-gray-800/30 animate animate-in slide-in-from-top duration-500 w-full ring-1 ring-gray-300 rounded-md shadow-md'>
      <span className='text-[9px] text-gray-300'>Projeto atual</span>
      <span className='text-gray-100 font-semibold text-xs'>
        { data?.name }
      </span>
    </div>
  )
}
import { formatDistance } from 'date-fns';
import React, { useMemo } from 'react';
import Footer from './Footer';
import { Header } from './Header';
import { IAction } from './useInvite';

type BodyProps = {
  title: string
  author: {
    name: string
  }
  project: {
    name: string
  }
  createdAt: Date
  onHandleAction?: (action: IAction) => Promise<void>
}

export const Body: React.FC<BodyProps> = ({ author, createdAt, project, title, onHandleAction }) => {

  const date = useMemo(() => {
    return formatDistance(createdAt, new Date())
  }, [createdAt])

  return (
    <div className='flex justify-between p-2 flex-col gap-1 w-full'>
      <div className='flex flex-col gap-1'>
      <Header title={title} />
      <span className='text-[11px] text-gray-300'><b>{author.name}</b> convidou você para entrar no <b>{project.name}</b></span>
      <span className='text-gray-300 text-xs' >{date}</span>
      </div>
      <Footer onClick={onHandleAction} />
    </div>
  )
}

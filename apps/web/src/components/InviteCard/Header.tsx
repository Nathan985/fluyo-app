import React from 'react';

export type IHeaderProps = {
  title: string
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <h1 className='font-semibold text-white text-sm '>{title}</h1>
  )
}

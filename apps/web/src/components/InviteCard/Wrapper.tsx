import React, { PropsWithChildren } from 'react';


export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-[420px] h-[140px] p-1 border border-gray-700 bg-gray-900 rounded-lg border-l-4 border-l-indigo-900' >
      {children}
    </div>
  )
}

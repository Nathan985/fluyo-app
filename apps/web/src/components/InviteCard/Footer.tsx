import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'src/components/Button';
import { IAction } from './useInvite';


const Footer: React.FC<{ onClick?: (action: IAction) => Promise<void> }> = ({ onClick }) => {

  const handleAcceptInvite = () => {
    onClick?.('accept')
  } 

  const handleDeclineInvite = () => {
    onClick?.('accept')
  } 

  return (
    <div className='flex gap-4'>
      <Button
        onClick={handleAcceptInvite}
      >
        <CheckIcon className="w-4 h-4" />
        Accept
      </Button>
      <Button 
        onClick={handleDeclineInvite}
        variant="outline"
      >
        <XMarkIcon className="w-4 h-4" />
        Decline
      </Button>
    </div>
  )
}

export default Footer;
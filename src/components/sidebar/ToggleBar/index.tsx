import React from 'react'

// Components
import ThemeButton from '@/components/Buttons/ThemeButon';
import ToggleSidebarButton from '../../Buttons/ToggleSidebarButton';
import CreateChatButton from '../../Buttons/CreateChatButton';

type Props = {}

const ToggleBar = (props: Props) => {
  return (
    <div className='h-14 w-full'>
      <div className='w-full h-full flex justify-between items-center'>
        <ToggleSidebarButton />
        <ThemeButton />
        <CreateChatButton />
      </div>
    </div>
  )
}

export default ToggleBar